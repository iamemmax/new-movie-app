import React, { useState } from 'react';
import {Button, Card, CardActionArea, CardContent, CardMedia,   Typography} from "@material-ui/core"
import OutsideClickHandler from 'react-outside-click-handler';
import slugify from 'react-slugify';
import {useStyles} from "../Homepage/styles/DisplayMovie"
import  * as AiIcons from "react-icons/ai";




function DisplaySimilarMovies({data, handlePlay}) {
  
 
    const {title, MovieAction, showMovieAction, card} = useStyles()

    const [movieAction, setMovieAction] = useState(false)
  
    const handleShowAction = (e) =>{
      setMovieAction(true)
    }
    const slug = slugify(data.title ||data.name )
   
     
    return( 
    
      
  
        
      <Card className={card}  onClick={handleShowAction} elevation={0}> 
            
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt= {data.title}
        />
        <CardContent>
          <Typography   xs={5} variant="h6" component="h2" noWrap className={title}>
            {data.title}
            
          </Typography>
          
         </CardContent> 

         <OutsideClickHandler onOutsideClick={() => setMovieAction(false)}>
         <div className={movieAction ? MovieAction && showMovieAction   : MovieAction  }>
           <div className="play" onClick={()=> handlePlay(data)} >
             <Button variant="contained" color="primary" size="small"  startIcon={<AiIcons.AiOutlinePlayCircle />}><span className="action" >Play</span></Button>
            </div>
           <div className="View">
            <Button href={`/movies/${slug}/${data.id}`} variant="contained" size="small"endIcon={<AiIcons.AiOutlineEyeInvisible/>}> <span className="action">View</span> </Button>
             </div>
         </div>
         </OutsideClickHandler>

         
      </CardActionArea> 
      </Card>
           
             
            
    );
}

export default DisplaySimilarMovies;
