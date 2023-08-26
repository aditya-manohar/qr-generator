import './App.css';
import {BrowserRouter, Link} from 'react-router-dom'
import AppHeader from './AppHeader';
import AppRoutes from './Routes';
import PageContent from './PageContent';

function App() { 

  return (
   <BrowserRouter>
   <AppHeader/>
   <PageContent/>
  </BrowserRouter>
  );

}

export default App;
