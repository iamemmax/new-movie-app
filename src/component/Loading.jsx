import React from 'react';
import {makeStyles} from  "@material-ui/styles"
import { Circles } from  'react-loader-spinner'

const useStyles = makeStyles({
   loader:{
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       height:"200px"
  

   }

})
function Loading() {

    const classes = useStyles()
    
  return (
    	<div className={classes.loader} >
        <Circles  color="#E28904"  height={50} width={50} />
        </div>
  )
  ;
}

export default Loading;
