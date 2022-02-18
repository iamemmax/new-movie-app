import { Typography } from '@material-ui/core'
import React from 'react'
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
  footer:{
    padding:"10px",
    backgroundColor:"#eee"
  }
})
const Footer = () => {
  const {footer} = useStyles()
  return (
    <div>
        <Typography variant="body2" align='center'className={footer} >Copyright © 2022 freak movie. All rights reserved</Typography>
    </div>
  )
}

export default Footer