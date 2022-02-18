import React, { useEffect } from 'react'
// import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/styles'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {  Grid } from '@material-ui/core';

const useStyles  = makeStyles((theme) =>({

    
    filterBtn:{
      //  display:"flex",
      //  justifyContent:"center",
      //   width:'100%',
      //   border:"2px solid red",
      //   textAlign:"center",
      //   margin:" 0px 10px",
      position:"sticky",
      top:"0",
        
     
        
        '&  > * button':{
            margin:"10px",
            padding:"10px 25px",
            borderRadius:"30px",
            outline:"none",
            backgroundColor:"transparent",
            border:"1px solid #eee",
            cursor:"pointer"
,
        [theme.breakpoints.down('sm')]:{
            fontSize:12,
            margin:10,
            padding:"10px 15px",

        },

    },
        '& .active':{
            backgroundColor:theme.palette.secondary.main,
            color:"#fff",
            border:"none",
        },
        
    },
}))

function FilterMovies({handleFilter, filterAllMovies}) {
   

useEffect(() => {
    document.getElementById("popular").click()
   
}, []);
       


    const {filterBtn} = useStyles()


  return (
    <div className={filterBtn}>

       

        
           <Grid container  >
             <Grid item xs={12} md={12} >


                {/* <Button type="button"  variant="outlined"  value="0"    onClick={handleFilter} >All</Button> */}

           
                <button   variant="outlined" id="popular" value="popular"   className={filterAllMovies === "popular" ? "active" : ""} onClick={handleFilter}   >Popular</button>
                <button  variant="outlined"  value="upcoming"   className={filterAllMovies === "upcoming" ? "active" : ""} onClick={handleFilter}  >Upcoming</button>
                
                <button  variant="outlined"   value="top_rated"   className={filterAllMovies === "top_rated" ? "active" : ""} onClick={handleFilter}  >Top Rated</button>
                
            
           </Grid>
           </Grid>
           
      
    </div>
  )
}

export default FilterMovies