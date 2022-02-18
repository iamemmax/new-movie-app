import React, {useState} from 'react';
import { Grid, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button} from '@material-ui/core';
import {useStyles} from "../../Pages/styles/singleStyle"
import ReactStars from "react-rating-stars-component";
import  * as AiIcons from "react-icons/ai";
import {format} from "d3-format";
import moment from "moment"

// import {format} from "https://cdn.skypack.dev/d3-format@3";

import YouTube from 'react-youtube';


function DisplayDetails({single}) {
  const f = format(".2s"); //formating number with k
  let trailer = single.videos && single.videos.results.find(data => data.name === "Official Trailer" || data.type === "Trailer")

    const [play, setPlay] = useState(false)
    const [selectedVideo, setselectedVideo] = useState(false)
    
    const handlePlayTrailer = (selectedVideo) =>{
      let id = selectedVideo.id
      setselectedVideo(trailer)
      setPlay(true)
      console.log(id);
    }
    
// youtube settings
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
       
      },
    };
    const {preview,   divContainer, close, title, videoImg,  votes, ratingIcon, overview, table,
       company } = useStyles()


    return (
  <div >
     <Grid container spacing={2} className={divContainer}>
        <Grid item xs={12} sm={12} md={6}>
            <div className={videoImg} style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${single.backdrop_path}')`}}>


            
            {!play && <Button  color="secondary" className="playBtn" size="large" onClick={() =>handlePlayTrailer(selectedVideo)}><AiIcons.AiOutlinePlayCircle /></Button>}
        
         
          { play && trailer.key !== null ? <YouTube className={preview} videoId={trailer.key}   control={false}  containerClassName={preview} opts={opts}  /> : null}
          { play && <Button variant="contained" color="primary" size="large" className={close} onClick={() =>setPlay(false)}>Close</Button>}


            </div>
        </Grid>


        <Grid item sm={12} md={6}>
            <div>
                <Typography variant="h5" component="h2" className={title}>{single.title || single.name}  </Typography>
               
               <Grid container className={votes} justifyContent="space-between">

                    <Grid  item className="rating" xs={6}>
                    <Typography variant="body1" className={ratingIcon}> Ratings:
                    </Typography>
                    <ReactStars   count={5} size={18} isHalf={true} value={single?.vote_average/2} emptyIcon={<i className="far fa-star"></i>} halfIcon={<i className="fa fa-star-half-alt"></i>} fullIcon={<i className="fa fa-star"></i>} activeColor="#ffd700" edit={false} />
                    </Grid>  

                    <Grid  item className="voting" xs={6}  >
                    <Typography variant="body1" className={ratingIcon} align="right"> <AiIcons.AiOutlineLike />: {f(single.vote_count)}
                    </Typography>
                    
                    </Grid>  

               </Grid>

                <Typography variant="body1" className={overview}>Release Date: {moment(single.release_date).format('LLL') }</Typography>
                
                <Typography variant="body1" className={overview}>{single.overview}</Typography>
            </div>   
        
            <Grid item xs={12}>
            <div className={company}>
            <Typography variant="h6" component="h2"  className="heading" gutterBottom>Production Companies</Typography>
            
            
<TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="caption table" classes={{root:table}}>
      
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="right">Country</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {single.production_companies && single.production_companies.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <img src={`https://image.tmdb.org/t/p/w200${row.logo_path}`} style={{width:"50px"}} alt={row.name} />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="right">{row.origin_country}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
            </Grid>
            </Grid>
     </Grid>

     
  </div>);
}

export default DisplayDetails;
