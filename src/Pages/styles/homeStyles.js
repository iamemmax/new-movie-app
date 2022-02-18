import {makeStyles} from "@material-ui/styles"

export const useStyles = makeStyles({
    grids:{
      margin:"150px",
     //  border:"2px solid red",
     },
     trend:{
       margin:"10px",
       
    },
    trendingBox:{
       margin:"40px 0",

       '& .heading':{
          fontWeight:600
       }
    },
    movieBox:{
     

       '& .heading':{
          fontWeight:600
       }
    },
   
     text:{
         backgroundColor:"#06070846",
         width:"100%",
         //textAlign:"center",
         zIndex:10,
         padding:'20px 40px',
         margin:"0px auto"
        },

        title:{
         color:"#fff",
         fontWeight:700,
         fontSize:45,
         padding:'10px',

  
        },
        
     overView:{
        width:"80%",
      //   margin:"0px auto"


      },

   
      p:{
       color:"#eee",
       fontSize:"16px",
       textAlign:"center",
       lineHeight:"30px",

      },
      preview:{
         width:"100%",
         position:"absolute",
         inset:"0",
         height:"500px",
         
      },
      close:{
         position: "absolute",
         bottom:"3rem",
         left:'0',
         zIndex:"11"
      }
   
   
   })