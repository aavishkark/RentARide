import Home from './Pages/Home';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import SearchResultsPage from './Pages/Search';
import BecomeHost from './Pages/BecomeHost';
import AllRoutes from './Components/Allroutes/Allroutes';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
        <Footer></Footer>
      </ChakraProvider>
    </div>
  );
}

export default App;
