import React from 'react';
import AddWheel from '../components/AddWheel';
import Header from '../components/Header';
import Wheellist from '../components/Wheellist';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AddWheel></AddWheel>
            <Wheellist></Wheellist>
        </div>
    )
}

export default Home;
