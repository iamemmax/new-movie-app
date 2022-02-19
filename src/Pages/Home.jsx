import React, {useEffect, useState} from 'react';
import { Grid, Typography } from '@material-ui/core';
import {TrendingFetch, MovieFetch,  TrailerAction,FilteredMovies,  LoadMoreMovies} from "../Redux/action/HomepageAction"
import {useDispatch, useSelector} from "react-redux"
import DisplayTrending from '../component/Homepage/DisplayTrending';
import DisplayMovies from '../component/Homepage/DisplayMovies';
import {useStyles} from "./styles/homeStyles"
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../component/Loading';
import PreviewVideo from '../component/PreviewVideo';
import {settings} from "../component/SliderSetting"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FilterMovies from '../component/Homepage/FilterMovies';
import {Helmet} from "react-helmet"


function Home() {
  const dispatch = useDispatch()
  const query = useSelector(state => state.query.query)
 



  const Movies = useSelector(state => state.Movies)
  let { movies, filterMovies, loadingFilter} = Movies

 
  const [filterAllMovies, setfilterAllMovies] = useState("popular");

 
  console.log(filterAllMovies);
  const handleFilter =(e) =>{
     setfilterAllMovies(e.target.value)
   }
  useEffect(() => {


    dispatch(TrendingFetch())  
    dispatch(MovieFetch(query)) 
    dispatch(FilteredMovies(filterAllMovies)) 
     
  }, [query, dispatch, filterAllMovies]);
  
  


  const trend = useSelector(state => state.Trending)
  const myTrailer = useSelector(state => state.Trailer)
    let {trailer} = myTrailer

    let {trending} = trend

    // let trailers = movies[0]
    
    const [selectedVideo, setSeletedVideo] = useState({})
    const [play, setPlay] = useState(false)
    const [page, setPage] = useState(2)
   
    

  const {grids, trendingBox, movieBox} = useStyles()
  


    console.log(selectedVideo);
  const handlePlayTrailer = (selectedVideo) =>{
    let id = selectedVideo.id
    dispatch(TrailerAction(id))
    setPlay(true)
  }

  

 
  const fetchMoreData =() =>{
    setPage(page+1)
    dispatch(LoadMoreMovies(query, page, filterAllMovies ))
  }
  return (
<>
   <div>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Hompage</title>
                <meta name="description" content="freaky movies is an online movies application, for watching, searching any movies or tv series  "/>
    

            </Helmet>
  

{/* <PreviewVideo  /> */}

{play && trailer.key !== null && <PreviewVideo videoId={trailer.key}  handleCloseVideo={()=>setPlay(false)}/>}

    <div>

          {/* trending movies */}
            {trending.loading && <Loading />}

             <div className={trendingBox}>
            <Typography variant='h6' className="heading" component="h2" gutterBottom>TRENDING MOVIES</Typography> 
            <Slider {...settings}>
            {trending && trending.map(data=> <DisplayTrending  handlePlayTrailer={handlePlayTrailer} movies={movies} setSeletedVideo={setSeletedVideo} data={data}  key={data.id} className={grids} />
           )}
           
           </Slider>
           </div>
              
           </div>


  <div className={movieBox}>
  {filterMovies && <Typography  className="heading" variant='h6' component="h2" gutterBottom>POPULAR MOVIES</Typography>

 }
    {filterMovies &&<div className="filterMovie">
  
      <FilterMovies handleFilter={handleFilter}  filterAllMovies={filterAllMovies}/>
    
    </div>}

{loadingFilter ?(<Loading />) : (

  <InfiniteScroll  scrollThreshold={0.6} dataLength={filterMovies?.length || movies.length} next={fetchMoreData} hasMore={true} loader={filterMovies &&( <Loading /> )}>
 
          <Grid container>
            {filterMovies?.map(data=> (
              <Grid item xs={6} sm={4} md={3} lg={2}  key={data.id}>
                 <DisplayMovies handlePlayTrailer={handlePlayTrailer} setSeletedVideo={setSeletedVideo}  data={data}  className={grids}/>

              </Grid>
            ) )}


              </Grid>
            </InfiniteScroll>
            )}




  </div>

 
     
  </div>
  </>
  );
}

export default Home;
