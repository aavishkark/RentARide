import Home from './Pages/Home';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar></Navbar>
        <Home></Home>
      </ChakraProvider>
    </div>
  );
}

export default App;
