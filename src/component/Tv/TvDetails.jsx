import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { TvDetail } from "../../Redux/action/TvAction";
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import Loading from "../../component/Loading";
import ReactStars from "react-rating-stars-component";
import  * as AiIcons from "react-icons/ai";
import {format} from "d3-format";
import moment from "moment"
import { useStyles } from "./styles/singlePage";
import slug from "react-slugify"

const TvDetails = () => {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const f = format(".2s"); //formating number with k


  useEffect(() => {
    dispatch(TvDetail(id));
   
  }, [dispatch, id]);

  const Tv = useSelector((state) => state.TvInfo);
  let { loading, single } = Tv;
  console.log(single);

  const { singlepage , seasonsFilms, listStyle, listStyle2} = useStyles()
  return (
    <div className={singlepage}>
      {loading && <Loading />}
      {single && (
        <Grid container spacing={5} className="single-Info" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <div className="name">
              <Typography variant="h5" component="h2">
                {single.name}
              </Typography>
            </div>
            <Grid container className="rating-box" justifyContent="space-between">
              <Grid item className="rating" xs={6}>
                <Typography variant="body1" className="ratingText">
               
                  Ratings:
                </Typography>
                
               <ReactStars
                  count={5}
                  size={18}
                  isHalf={true}
                  value={single?.vote_average / 2}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  edit={false}  
                  classNames="myStars"
                  />
              </Grid>

              <Grid item className="rating" xs={6}>
                <Typography
                  variant="body1"
                  className="ratingIcon"
                  align="right"
                >
                
                  <AiIcons.AiOutlineLike />: {f(single.vote_count)}
                </Typography>
              </Grid>
            <div >
              <Typography className="description"  variant="body1" >
                {single.overview}
              </Typography>

<div className="seriesInfo">
              <Typography variant="body2" className="season" ><span className="heading">Seasons :</span>{single?.number_of_seasons } </Typography>
               <Typography variant="body2" className="season"><span className="heading">Episodes : </span>{single?.number_of_episodes } </Typography>
              
               {/* <Typography variant="body2" className="season"><span className="heading">Produc : </span>{single?.number_of_episodes } </Typography>
               */}


{/* previous episode shown */}
                
            {   single.last_episode_to_air && (<div className="previous">

              <Typography className="description"  variant="h4" >
                Recap of last episode :
              </Typography>
            
              <img   src={`https://image.tmdb.org/t/p/w300/${single.last_episode_to_air.still_path }`} alt={single.last_episode_to_air.name} /> 

               {/* last episode */}
               <Typography variant="body2" className="season" ><span className="heading">Name :</span>{single.last_episode_to_air?.name } </Typography>
               <Typography variant="body2" className="season"><span className="heading">Description : </span>{single?.last_episode_to_air.overview } </Typography>
              
               <Typography className="season"  variant="body2" >
             <span className="heading"> Date shown:</span> { moment(single?.last_episode_to_air.air_date).endOf('day').format('lll')}
              </Typography>
              <Typography variant="body2" className="season"> <span className="heading">Season :</span>  {single.last_episode_to_air?.season_number } </Typography>
              
              <Typography variant="body2" className="season"> <span className="heading">Episode :</span>   {single.last_episode_to_air?.episode_number } </Typography>
              
                </div>)
}



             {   single.next_episode_to_air && ( <div className="next">

              <Typography className="description"  variant="h4" >
                Next on {single?.name}  episode :
              </Typography>
              { single.next_episode_to_air?.still_path   ? (<img   src={`https://image.tmdb.org/t/p/w300/${single.next_episode_to_air.still_path }`} alt={single.next_episode_to_air.name} /> ): ""}

               {/* next episode */}
               <Typography variant="body2" className="season" ><span className="heading">Name :</span>{single?.next_episode_to_air?.name } </Typography>
               <Typography variant="body2" className="season"><span className="heading">Description : </span>{single?.next_episode_to_air.overview } </Typography>
              
               <Typography className="season"  variant="body2" >
             <span className="heading"> Date shown:</span> { moment(single.next_episode_to_air.air_date).endOf('day').format('lll')}
              </Typography>
              <Typography variant="body2" className="season"> <span className="heading">Season :</span>  {single?.next_episode_to_air?.season_number } </Typography>
              
              <Typography variant="body2" className="season"> <span className="heading">Episode :</span>   {single?.next_episode_to_air?.episode_number } </Typography>
              
                </div>)
}
</div>

            </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="videoFrame">
              <img  src={`https://image.tmdb.org/t/p/w500/${single.backdrop_path}`} alt={single.name} />
            </div>

              <div className="producer">
              <Typography   variant="h6"  className="heading">
                Produced By :
              </Typography>
                <List>
            {single.created_by.map(data =>(
              <ListItem>
              <ListItemAvatar>
                <Avatar>
                <img src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`} alt={data.name} />
                </Avatar>
              </ListItemAvatar>
              
              <ListItemText primary={data.name} classes={{primary:listStyle}} />
            </ListItem>
    
        
            ))}
            
    </List>
    
              </div>




           
           
              <div className="production-company">
              <Typography   variant="h6"  className="heading">
                Production Companies :
              </Typography>
                <List>
            {single.production_companies.map(data =>(
              <ListItem>
              <ListItemAvatar>
                <Avatar>
                <img src={`https://image.tmdb.org/t/p/w200/${data.logo_path}`} alt={data.name} />
                </Avatar>
              </ListItemAvatar>
              
              <ListItemText primary={data.name} classes={{primary:listStyle, secondary:listStyle2}}  secondary={` Country: ${data.origin_country}`}/>
            </ListItem>
    
        
            ))}
            
    </List>
    
              </div>
           


          </Grid>
        </Grid>


      )}
   

              {single && <div className={seasonsFilms} >
              <Typography   xs={5} variant="h6" component="h2" noWrap gutterBottom className="name">
                {single.name} Seasons
                  
                </Typography>
              <Grid container spacing={2}>
                        {single.seasons?.map(data =>(
                      <Grid item  xs={6} sm={4} md={3} lg={2}>
                        <Card className="season" elevation={0} key={data.id}> 

            
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt= {data.name}
              />
              <CardContent>
                <Typography   xs={5} variant="h6" component="h2" noWrap className="card-title">
                  {data.name}
                  
                </Typography>
                
               </CardContent> 
      
               
               
                          <div className="playIcon"> <Link to={`/tv/${id}/${slug(name)}/season/${data.season_number}`}><AiIcons.AiOutlinePlayCircle /></Link></div>
            </CardActionArea> 
                 </Card>
                 </Grid>
                                    
                        
                               ))}
                  </Grid>
           </div>}

    </div>
  );
};

export default TvDetails;


