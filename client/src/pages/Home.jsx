
import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products1 from '../components/Products1';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />            
            <Slider />
            <Categories />
            <Products1 />
            <Newsletter />
            <Footer />
        </div>        
    )
}

export default Home

