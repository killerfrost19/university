import React, { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Links} from '../src/components/Pages/Menus.js'

const LazyPage= React.lazy(()=>import("./components/Pages/Page.js"))

function App() {
  return (
    <div className='App bg-slate-100 min-h-screen flex flex-col'>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        {Links.map(link => (
                        <Route
                            key={link.path}
                            path={link.path}
                            element={<Suspense fallback={<div>Loading...</div>}>
                            <LazyPage curr={link.title} />
                          </Suspense>}
                        />
                    ))}
      </Routes>    
      <Footer />
    </div>
  );
}

export default App;
