import React, { useState } from 'react';
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core"
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/styles';
import {useStyles} from "../Homepage/styles/DisplayMovie"
import OutsideClickHandler from 'react-outside-click-handler';
import  * as AiIcons from "react-icons/ai";
import { motion } from 'framer-motion';
import slugify from 'react-slugify';



function DisplayTrending({data, setSeletedVideo, handlePlayTrailer}) {
  
  const classes = useStyles()
  
  const [movieAction, setMovieAction] = useState(false)
  
  const handleShowAction = (e) =>{
    setMovieAction(true)
  }
  const handlePlay = (data) =>{
    setSeletedVideo(data)
    handlePlayTrailer(data)
  }
  let {title, MovieAction, showMovieAction} = classes
  const slug = slugify(data.title ||data.name )


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut"
      }
    }
  }
  
  return( 
  

      
      <motion.div
      variants={container}
      initial="hidden"
      animate="show" 
      whileHover={{ scale: 0.9 }}
      >
    <Card className={classes.card}  onClick={handleShowAction} elevation={0} variant={item}> 
              
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt= {data.title}
      />
      <CardContent>
        <Typography   xs={5} variant="h6" component="h2" noWrap className={title}>
          {data.title || data.name}
          
        </Typography>
        
       </CardContent> 

       <div className={movieAction ? MovieAction && showMovieAction   : MovieAction  }>
       <OutsideClickHandler onOutsideClick={() => setMovieAction(false)}>
         <div className={movieAction ? MovieAction && showMovieAction   : MovieAction  }>
           <div className="play" onClick={()=> handlePlay(data)} >
             <Button variant="contained" color="primary" size="small"  startIcon={<AiIcons.AiOutlinePlayCircle />}><span className="action" >Play</span></Button>
            </div>
           <div className="View">
            <Link to={`/${slug}/${data.id}`}> <Button variant="contained" size="small"endIcon={<AiIcons.AiOutlineEyeInvisible/>}> <span className="action">View</span> </Button>
             </Link></div>
         </div>
         </OutsideClickHandler>
       </div>
    </CardActionArea> 
    </Card>
       </motion.div>  
        
          
  );
}

export default DisplayTrending;
