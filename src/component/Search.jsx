import React, { useState } from "react";
import { Button, IconButton, InputBase } from "@material-ui/core";
import  * as AiIcons from "react-icons/ai";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { SearchQuery } from "../Redux/action/HomepageAction";
// import { SearchQuery } from "../Redux/action/TvAction";

const useStyles = makeStyles((theme) => ({
  search: {
    margin: "0px auto",
    outline: "none",
    border: "none",
    height: "35px",
    backgroundColor: "#fff",
    padding: "5px",
    borderRadius: 50,
    width: "100%",
    position: "relative",
    flex:1,
    
    [theme.breakpoints.up("md")]: {
      // backgroundColor:theme.palette.secondary.main,
      // width: '20ch',
      width: "500px",
    },

    "& input": {
      // width:"100%",
      padding: "0 35px 0 20px",
    },
  },

  searchBtn: {
    position: "absolute",
    right: "-2rem",
    top: "50%",
    color: "#e28904",
    zIndex: 5,
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    fontSize: 20,
  },
  searchBox: {
    // border:"3px solid red",
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > *": {
      width: "100%",
      // paddingLeft: "20px",
      [theme.breakpoints.up("lg")]: {
        width: "100%",
      },
    },
  },
}));
function Search() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  dispatch(SearchQuery(query));

  const handleInput = (e) =>{
      setInput(e.target.value);
      
}
const handleQuery = (e) => {
    e.preventDefault()
    setQuery(input);
    setInput("")
  };
  const { search, searchBox, searchBtn } = useStyles();
  return (
    <div className={searchBox}>
      <form onSubmit={handleQuery}> 
        <IconButton>
          <InputBase
            placeholder="search ......"
            color="secondary"
            elevation={0}
            onChange={handleInput}
            value={input}
            classes={{ root: search }}
          />
        <Button type="submit" disableElevation className={searchBtn}><AiIcons.AiOutlineSearch/></Button>

        </IconButton>
      </form>
    </div>
  );
}

export default Search;
