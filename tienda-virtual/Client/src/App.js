import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProducts';
import Discounts from './components/Discounts';
import CategoryList from './components/CategoryList';
import Footer from './components/Footer';

import './App.css';

function App() {
return (
    <div className="app">
        <Header />
        <NavBar />
        <Banner />
        <NewProducts />
        <FeaturedProducts />
        <Discounts />
        <CategoryList />
        <Footer />
    </div>
    );
}

export default App;
