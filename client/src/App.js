import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ChakraBaseProvider, Container, extendBaseTheme, extendTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contactus from './components/Contactus/Contactus';
import Webdevelopement from './components/Services/Webdevelopement';
const { Button } = chakraTheme.components
const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      900: '#171923',
    },
  },
}
)


function App() {
  return (
    <ChakraBaseProvider theme={theme}>
    <Header/>
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contactus" element={<Contactus/>}/>
          <Route exact path="/web" element={<Webdevelopement/>}/>
    </Routes>
    <Footer/>
    </ChakraBaseProvider>
  );
}

export default App;
