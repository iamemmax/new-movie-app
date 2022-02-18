import { makeStyles } from '@material-ui/styles';

 export const useStyles = makeStyles((theme) => ({
 title:{
   fontSize:14
 },
 card:{
  margin:7,
  position:"relative",
  cursor:'pointer',
}, 
MovieAction:{
position:"absolute",
top:"45%",
left:0,
right:0,
transform:"translate(-50% -50%)",
width:"100%",
display:"none",
justifyContent:"space-between",
alignItems:"center",
padding:"10px 0",





},

showMovieAction:{
 display:"flex",
 position:"absolute",
top:"45%",
left:0,
right:0,
transform:"translate(-50% -50%)",
width:"100%",
justifyContent:"space-between",
alignItems:"center",
padding:"10px 0",

[theme.breakpoints.down('sm')]:{
 
  
},

'&  .action ':{
  padding:"2px",
  zIndex:999,

  
  [theme.breakpoints.down('sm')]:{
    display:"none",
    
  },
  


},
'& a':{
 textDecoration:"none"
    

  },
  '& .play':{
    // [theme.breakpoints.down('sm')]:{
    //  margin:"0px",
    //  width:"20px",
     
     
      
    // },
  },

  '&  * button ':{
    padding:"2px",
  }  
  
  
}
 
}))