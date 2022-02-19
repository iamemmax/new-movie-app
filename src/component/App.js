import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Container } from '@material-ui/core';
import Home from '../Pages/Home';
import { createTheme, ThemeProvider } from '@material-ui/core';

import Navbar from './Header/Navbar';
import Trend from '../Pages/Trend';
import Singlepage from '../Pages/Singlepage';
import TvSeries from '../Pages/TvSeries';
import TvDetails from './Tv/TvDetails';
import DisplayEpisodes from './Tv/DisplayEpisodes';
import {Helmet} from "react-helmet";
import Footer from './footer/Footer';
import Loading from './Loading';



const theme = createTheme({
  palette:{
    primary:{
      main:"#131921",
      light:"#286076"
    },
    secondary:{
      main:"#e28904"
    }
    
  },
  typography:{
    h1:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    h2:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    h6:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    h5:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    body1:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    body2:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    button:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    }
  }
})
console.log(theme);

const App = () => {
  window.addEventListener("load", ()=>{
    <Loading />
  })


  return (
    <>

      <Helmet>
                <meta charSet="utf-8" />
                <title>Freaky movie</title>
                <link rel="canonical" href="https://freaky-movie.netlify.app" />
                <link rel="shortcut icon" href="https://cdn-icons.flaticon.com/png/128/2915/premium/2915640.png?token=exp=1644830467~hmac=12da10544ab536cdd71d55b653a3ada4" />
                
                <meta name="description" content="freaky movies is an online movies application, for watching, searching any movies or tv series  "/>
                 <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    

            </Helmet>
    
    <ThemeProvider theme={theme}>

  <Container>
      <Router>

        <header> <Navbar /></header>

        <main>
            <Routes>
                <Route  path="/"  element={<Home />}  />
                <Route  path="/trend"  element={<Trend />}  />
                <Route  path="/:name/:id"  element={<Singlepage />}  />
                <Route  path="/tv"  element={<TvSeries />}  />
                <Route  path="/:tv/:name/:id"  element={<TvDetails />}  />
                <Route  path="/:tv/:id/:name/:season/:number"  element={<DisplayEpisodes />}  />
            </Routes>
        </main>    
        <footer><Footer/></footer>
      </Router>
  </Container>
  </ThemeProvider>
    </>
  );
};

export default App;
