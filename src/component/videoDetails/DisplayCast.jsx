import React from 'react';
import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody } from '@material-ui/core';
import { useSelector } from 'react-redux';
import  * as FaIcons from "react-icons/fa";
import {useStyles} from "./styles/cast"

function DisplayCast() {

    const Single = useSelector(state => state.Single)
    let {casts} = Single
// let {cast} = Single
const classes = useStyles()

  return(
   
    <div className={classes.divContainer}>
    <Typography variant='h5' component='h2' className={classes.heading} gutterBottom>Movie Casts</Typography>

     
         <Grid container >
           <Grid item xs={12} md={12} >
       <TableContainer component={Paper}>
     <Table sx={{ minWidth: 650 }} aria-label="movie table" size="small" >
     
       <TableHead>
         <TableRow>
           <TableCell><Typography variant='h5' component='h2' className={classes.title}>#</Typography></TableCell>
           <TableCell><Typography variant='h5' component='h2' className={classes.title}>  Picture</Typography></TableCell>
           <TableCell><Typography variant='h5' component='h2' className={classes.title}>Name</Typography></TableCell>
           <TableCell><Typography variant='h5' component='h2' className={classes.title}>Dept</Typography></TableCell>
           <TableCell><Typography variant='h5' component='h2' className={classes.title}>Character</Typography></TableCell>
           <TableCell><Typography variant='h5' component='h2' className={classes.title}>Popularity</Typography></TableCell>
           {/* <TableCell align="right">Country</TableCell> */}
          
         </TableRow>
       </TableHead>

       <TableBody>
     {casts &&  casts.cast.map((data, index) => (

<TableRow key={data.id}>
<TableCell>{index + 1}</TableCell>
<TableCell component="th" scope="row">
 {data.profile_path ? <img src={`https://image.tmdb.org/t/p/w200${data.profile_path}`} style={{width:"30px", height:"40px", objectFit:"cover", objectPosition:"top center"}} alt={data.name} /> :  <FaIcons.FaUserCircle style={{width:"30px", height:"40px", objectFit:"cover", objectPosition:"top center"}}/>}
</TableCell>
<TableCell><Typography variant="body2">{data.name}</Typography></TableCell>
<TableCell><Typography variant="body2">{data.known_for_department}</Typography></TableCell>
<TableCell><Typography variant="body2">{data.character}</Typography></TableCell>
<TableCell><Typography variant="body2">{data.popularity}</Typography></TableCell>



</TableRow>

       )
       
       )} 
         </TableBody>
       </Table>
   </TableContainer>
       </Grid>
         </Grid>
</div>
  );
}

export default DisplayCast;
