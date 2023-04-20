import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import CompositionExample from "./pages/composition";
import MainPage from "./pages/main/main";
import {Route, Router, Routes} from "react-router";
import Blog from "./pages/blog/blog";
import BlogPage from "./pages/blog/blog";
import ProductList from "./pages/products/product-list";


function App() {

    return (
        <Routes>
            <Route path='' element={<MainPage></MainPage>}/>
            <Route path='blog' element={<BlogPage></BlogPage>}/>
        </Routes>
    )

    // return (<CompositionExample></CompositionExample>);

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.tsx</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
}

export default App;
