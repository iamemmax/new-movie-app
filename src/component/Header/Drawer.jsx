import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink} from "react-router-dom"
import React from 'react';
import  * as AiIcons from "react-icons/ai";
import  * as FaIcons from "react-icons/fa";
import { makeStyles } from '@material-ui/styles';


const drawerWidth = 200
const useStyles = makeStyles((theme)=>({
    drawer:{
        width:drawerWidth,

        
        '& .drawerLink':{
        textDecoration:"none",
        lineHeight:"50px",
        fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif",
        color:"#000"
    },
    '& :hover':{
        color:theme.palette.secondary.main
    },
    '& .active':{
        color:theme.palette.secondary.main
    },
    }

}))
const DrawerCom = ({open, onClose, drawerlinkBtn}) => {
const classes = useStyles()
let navLinks = [
    
   
    {
    "name":"Movies",
    "path":"/movies",
    "icon" : <AiIcons.AiOutlineVideoCamera/>
},
   
    {"name":"Tv series",
    "path":"/tv", 
    "icon": <FaIcons.FaTv/>    
},

]
  return (
  
//   <div>
      <Drawer open={open} onClose={onClose} classes={{paper:classes.drawer}}>
        <List>
            {navLinks.map((links, index) =>(

                
                <ListItem button key={index}>
                <ListItemIcon>
                    {links.icon}
                </ListItemIcon>
                    <ListItemText key={index}><NavLink to={links.path}  className="drawerLink" onClick={drawerlinkBtn}>{links.name}</NavLink></ListItemText>
            </ListItem>
                ))}
        </List>
      </Drawer>
  /* </div> */
  
  )
  
};

export default DrawerCom;
