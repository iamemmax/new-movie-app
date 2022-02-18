import { makeStyles } from "@material-ui/core"


export const useStyles = makeStyles((theme)=>({
    TvWrappaer:{position:"fixed", left:"4rem", right:"0", width:"91%",display:"flex",
    justifyContent:"center",
    alignItems:"center",zIndex:"999" },
    tvContainer:{
        width:"100%",position:"relative",


        '& .title':{paddingTop:"50px", fontWeight:600},
        '& .filter':{
            padding:"20px 0",
            
            '& > button':{
                margin:"10px",
                borderRadius:"50px",

                [theme.breakpoints.down('md')]:{
                margin:"6px",
                fontSize:12

                }
            },
            '&  .active':{
               backgroundColor:theme.palette.secondary.main,
               color:"#fff",
               border:"none"
            },
        }
    },

    card:{
        position:"relative",
        margin:"5px",

    },

    title:{
        fontSize:"14px"
    },
    tvActionBtnsBox:{
        position:"absolute",
        top:"45%",
        left:"0px",
        width:"100%",
        transform:"translateY(-50%)",
        
        
        '& .middle-container':{
            display:"flex",
            justifyContent:"space-between",  
            transform:"scale(0)",
            transition: "transform .5s ease"

,

        '&  * a':{
            // width:"40px"
            textDecoration:"none"
        },
        '&  .action':{
            [theme.breakpoints.down("sm")]:{
                display:"none"
            }
        },

        

        },
        '& .showAction':{
            transform:"scale(1)",
    
            },
    },

    // display Episode  component
    banner_img:{
        width:"100%",
        height:"300px",

        ' & img':{
            height:"auto",
            width:"100%",
            Object:"cover"
        }
    },
    
    card_header:{
        fontSize:22,
        padding:"10px 0",
        //color:"red",
        textTransform:"capitalize"
    },
    episode1:{
        '& .card-title':{
            fontSize:14,
        }
    },
    top_box:{
        marginBottom:"30px",
        height:"400px",
        overFlow:"hidden",
        
        [theme.breakpoints.down("md")]:{
            height:"auto"
        },
        '&  img':{
            height:"400px",
            width:"100%",
            objectFit:"cover"
        }, 
        '&  .card-title':{
            fontSize:20,
            padding:"10px 0",
            textTransform:"capitalize"

        },
        '& .card-desc':{
            fontSize:14,
            padding:"5px 0",
            lineHeight:"30px"

        }


    }
}))