import {makeStyles} from "@material-ui/styles"

export const useStyles = makeStyles((theme) =>({


    divContainer:{margin:"3rem 0", paddingBottom:"2rem", position:"relative",

    '& .playBtn':{
       
            position: "absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            fontSize:"100px",
            cursor:"pointer",
            zIndex:5,
         
    
    }

},
table:{paddengLeft:0},
    heading:{

        fontSize:"20px",
        fontWeight:"600",
        textTransform:"capitalize",
        padding:"0px 10px",

    },

    videoImg:{
        height:"535px",
        backgroundPosition:" top",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        position:"relative",

        [theme.breakpoints.down("md")]:{
            margin:"0",
            height:"300px",
            width:"100%",
        },
        [theme.breakpoints.only("md")]:{
            margin:"0",
            height:"400px",
        }

    },
    title:{
        padding:"20px 0",
        fontSize:"22px",
        fontWeight:700,

    },
   
    ratingIcon:{
        marginTop:"5px",
        // border:"2px solid red"
        
    },
    stars:{
        '& .rating':{
            display:"flex",
            alignItem:"center",
           
            '& .ratingText':{
                paddingRight:"10px",
            },
            '& .myStars':{
                width:"100px",
                marginTop:"-2px",

            },
            '& .ratingIcon':{
                flexGrow:"1",
                marginRight:"30px",
                // border:"2px solid red"


            }
        },
        
    }
    ,
    overview:{
        lineHeight:"30px",
        padding:"10px 0px",
        fontSize:"14px"

    },
    votes:{
        // display:"flex",
        justifyContent:"space-between",


        "& .rating":{
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"center",
            // padding:"5px",
    
        },
        '& .voting':{
            
            paddingRight:" 30px",
    
        },
    },
    company:{
        padding:"15px 0px",
        fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif",
        
        '& .heading':{
            fontSize:18,
            textTransform:"uppercase",
            fontWeight:600

        }
    },
    heading:{
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:600,
        padding:"15px 0px",


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
        height:"100%",
        
     },
     close:{
        position: "absolute",
        bottom:"3rem",
        left:'0',
        zIndex:"11"
     },
    

   
   }))