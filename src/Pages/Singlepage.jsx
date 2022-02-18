import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {VideoDetail, movieCast, SimilarMovies, LoadMoreSimilarMovies} from "../Redux/action/SingleDetailAction"
import {TrailerAction} from  "../Redux/action/HomepageAction"
import {useParams} from "react-router-dom"
import DisplayDetails from '../component/videoDetails/DisplayDetails';
import DisplayCast from '../component/videoDetails/DisplayCast';
import DisplayCrew from '../component/videoDetails/DisplayCrew';
import { Grid, Typography } from '@material-ui/core';
import DisplaySimilarMovies from '../component/videoDetails/DisplaySimilarMovies';
import {useStyles} from "./styles//singleStyle"
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../component/Loading';
import PreviewVideo from '../component/PreviewVideo';
import {Helmet} from "react-helmet"

function Singlepage() {
const {id} = useParams()

const dispatch = useDispatch()
// single movie info
const Single = useSelector(state => state.Single)

// similar movies
const similarMovies = useSelector(state => state.similar)
let {loading, single} = Single
let { similar} = similarMovies





// dispatching single vedio  details, cast, crew and similar movies
useEffect(() => {
    dispatch(VideoDetail(id))
      dispatch(movieCast(id))
      dispatch(movieCast(id))
      dispatch(SimilarMovies(id))
   
}, [dispatch, id]);

// importing material ui styles
const {heading, divContainer} = useStyles()


// load more movies
const [page, setPage] = useState(2)
  const fetchMoreData =() =>{
    setPage(page+1)
    dispatch(LoadMoreSimilarMovies(id, page))
  }




  // play trailer
  const myTrailer = useSelector(state => state.Trailer)
  let {trailer} = myTrailer
  const [selectedVideo, setSeletedVideo] = useState(false)
    const [play, setPlay] = useState(false)
      

console.log(selectedVideo);
    // trigger movie trailer when play btn is click
    const handlePlay = (data) =>{
      setSeletedVideo(data)
      handlePlayTrailer(data)
    }
    
    // dispatching  trailer video by using video id 
    const handlePlayTrailer = (selectedVideo) =>{
    let id = selectedVideo.id
    dispatch(TrailerAction(id))
    setPlay(true)
  }


  return (
  <div>

<Helmet>
                <meta charSet="utf-8" />
                <title>{single.title || single.name}</title>
                <link rel="canonical" href="https://freaky-movie.netlify.app" />
                <meta name="description" content={single.overview}/>
                 <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    

            </Helmet>
  {play && <PreviewVideo videoId={trailer.key}  handleCloseVideo={()=>setPlay(false)}/>}
      
      {loading &&   <Loading />}
     {single && <DisplayDetails  single={single}/>}

    <>
    {/* <Loading /> */}
    {loading ? <Loading /> :<DisplayCast />}
    {loading ? <Loading /> :<DisplayCrew />}
     

      {/* display similar videos */}
     
     <div className={divContainer}>
     {similar.loading && <Loading />}
     {similar.length > 0 && <Typography variant="h5" component="h2" className={heading}>Recommended movies</Typography>}
     
     {similar && <InfiniteScroll  dataLength={similar.length} next={fetchMoreData} hasMore={true} loader={similarMovies.loading &&  <Loading />}> 
     
        <Grid container>

          {similar && similar.map((data, index)=> (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <DisplaySimilarMovies data={data}   handlePlay={() => handlePlay(data)}   />

        </Grid>
  ) )}

        
      </Grid>
  </InfiniteScroll>} 
      
    </div>
     </>

  </div>
  
  );
}

export default Singlepage;
