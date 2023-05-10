import * as React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import '../wonho-ui/css/style.scss'
import './App.scss';

function App() {
  React.useEffect(()=> {
    document.documentElement.setAttribute("data-theme", "light");
  }, [])
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home/page1' element={<Page1 />}/>
        <Route path='/home/page2' element={<Page2 />}/>
      </Routes>
    </HashRouter>
    
    </>
  )
}

export default App;
