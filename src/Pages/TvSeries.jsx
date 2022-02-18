import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTvAction, LoadMoreTv } from "../Redux/action/TvAction";
import { Button, Grid, Typography } from "@material-ui/core";
import DisplayTvShow from "../component/Tv/DisplayTvShow";
import Loading from "../component/Loading";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useStyles } from "../component/Tv/styles/tvstyles";
import {Helmet} from "react-helmet"


const TvSeries = () => {
    const dispatch = useDispatch();
    // @DESC import global search query from redux state
    const query = useSelector((state) => state.query.query);

    //@DESC import tv series from redux state

    const Tvseries = useSelector((state) => state.Tv);
    let { loading, FilterTv } = Tvseries;
    // @DESC setting fitered to state
    const [filter, setFilterTv] = useState("popular");

    const handleTvFilter = (e) => {
        setFilterTv(e.currentTarget.value);
    };
    // console.log(loading);
    
    // @DESC loadmore tv series on scroll
    const [page, setPage] = useState(2);
    const fetchMoreData =() =>{
        setPage(page+1)
        dispatch(LoadMoreTv(filter, page,  query));
    }
    console.log(query);
    
    useEffect(() => {
        dispatch(GetTvAction(filter, query));
    }, [dispatch, filter, query]);


    const {tvContainer} = useStyles()
    
    return (
        <div className={tvContainer}>

        <Helmet>
                <meta charSet="utf-8" />
                <title> Tv series</title>
                <link rel="canonical" href="https://freaky-movie.netlify.app/tv" />
                <meta name="description" content="freaky movies is an online movies application, for watching, searching any movies from tv series  "/>
                <meta name="keyword" content="tv, episode, seris, season, "/>
                 <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    

            </Helmet>


            <Typography variant="h5" component="h2" className="title" gutterBottom>
                TV SERIES
            </Typography>

            <div className="tv-box" >
                <div className="filter">
                    <Button variant="outlined" className={filter === "popular" ? "active" : ""} onClick={handleTvFilter} value="popular">
                        Popular</Button>
                    <Button variant="outlined" className={filter === "on_the_air" ? "active" : "" } onClick={handleTvFilter} value="on_the_air">
                        Latest
                    </Button>
                    <Button   variant="outlined" className={filter === "top_rated" ? "active" : "" }  onClick={handleTvFilter} value="top_rated">
                        Top rated
                    </Button>
                </div>
                    
  
 {/* {loadingFilter &&   <Loading />} */}
            {loading && <Loading />}

                {FilterTv && <InfiniteScroll  dataLength={FilterTv?.length} next={fetchMoreData} hasMore={true} loader={loading &&  <Loading />}> 
                
                <Grid container>
                
                {FilterTv && FilterTv.map((data)=> (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={data.id}>
                    <DisplayTvShow data={data} />
                    
                    </Grid>
                    ) )}

     
   </Grid>
</InfiniteScroll>}
                    
            </div>
        </div>
    );
};

export default TvSeries;
