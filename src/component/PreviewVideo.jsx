import React  from "react";
import {makeStyles} from "@material-ui/styles"
import {Box, Button} from "@material-ui/core"
import YouTube from 'react-youtube';



const useStyles = makeStyles((theme) => ({
    previewBox:{
        height:"500px",
        width:"91%",
        backgroundColor:"#022431a2",
        position:"fixed",
        top:"3.5rem",
        zIndex:"10",
        margin:"0px auto",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        [theme.breakpoints.down('md')]: {
            height:"350px",
            right:0,
            left:0,
            width:"100%"
          },
        [theme.breakpoints.only('md')]: {
            height:"450px",
            width:"100%",

            right:0,
            left:0,
          },

        '& .middle':{
            backgroundColor:"#fff",
            height:"100%",
            width:"100%",
            margin:"0px auto",

           
        },
        '& .preview':{
            width:"100%",
            height:"500px",

            [theme.breakpoints.down('md')]: {
                height:"300px"
              },
            [theme.breakpoints.only('md')]: {
                height:"400px"
              },
        },
        '& .close-Youtube':{
            zIndex:9999,

            [theme.breakpoints.down('md')]: {
              bottom:"0rem",
            },
       
        },
        
        
    },
})
)
function PreviewVideo({videoId, handleCloseVideo}) {
    const {previewBox} = useStyles()

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
         
        },
      };
      
  return (

      <Box className={previewBox}>
            <div className="middle">
               
                
                   <YouTube videoId={videoId}   control={false}  containerClassName="preview" opts={opts}  />
                   <Button variant="contained" color="primary" size="large" className="close-Youtube" onClick={ handleCloseVideo}>Close</Button>
            </div>
    </Box>

)
}

export default PreviewVideo;
