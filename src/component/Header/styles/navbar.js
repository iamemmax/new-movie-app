import { makeStyles } from "@material-ui/styles"
export const useStyles = makeStyles((theme) => ({
    laptop:{
        width:"95%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"0px auto",

        '& .logo a':{
            color:"#fff",
            textDecoration:"none",
        },
        '& .navLink':{
            color:"#eee",
            textDecoration:"none",
            transition:"color .3s ease",

            '&:hover':{
            color:theme.palette.secondary.main,
            
            },
        },
            '& .active':{
            color:theme.palette.secondary.light,
            
            },

    },


    tab:{
        width:120,
        minWidth:120,
        textTransform:"capitalize",
        fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif",
        fontSize:16,
        transition:'color .5s ease',
        // '&:hover':{color:"#e28904"},

        
    },
    
    mobile:{
        width:"100%",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",

        '& .logo a':{
            color:"#fff",
            textDecoration:"none",
        },
        
        
      
       
        '& .drawer':{
            position:"absolute"
        },
       
        '& .menu':{
            cursor:"pointer",

            '& >  .bar':{
                fontSize:"30px"
            }

        }
    },

}))
