/**
 * @file Home.js
 * @description This file contains the Home component, which is the main content area of the application.
 * It dynamically renders a list of restaurants using the `Fooddata` array.
 * The component includes functionality to filter restaurants by category and reset the list to show all items.
 * It also utilizes Bootstrap Cards for the visual representation of restaurant details.
 */


import React, { useState } from 'react';
import Fooddata from './data';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';


const FilterButton = ({ label, onClick, className }) => (
    <button className={`btn ${className}`} onClick={onClick}>{label}</button>
);

const RestaurantCard = ({ restaurant }) => (
    <Card key={restaurant.id} style={{ width: '22rem', border: 'none' }} className="mx-2 mt-4 card_style">
        <Card.Img variant="top" src={restaurant.imgdata} style={{ height: '16rem' }} className='mt-3' />
        <Card.Body>
            <Card.Title>{restaurant.rname}</Card.Title>
            <Card.Text>
                Price: {restaurant.price} | Rating: {restaurant.rating}
            </Card.Text>
        </Card.Body>
    </Card>
);

const Home = () => {
    const [menu, setMenu] = useState(Fooddata);
    const [ambianceFilter, setAmbianceFilter] = useState('All');

    const filterMenu = (key, value) => {
        setMenu(value === 'All' ? Fooddata : Fooddata.filter(item => item[key] === value));
    };

    const sortBy = (type) => {
        const sortedMenu = [...menu].sort((a, b) =>
            type === 'rating' ? b.rating - a.rating : parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
        );
        setMenu(sortedMenu);
    };

    return (
        <>
            <section className='title_section text-center my-4'>
                <h1 className='moodmunch-title'>🍴Mood<span className="highlight">Munch</span></h1>
                <p className="subtitle">Discover food spots tailored to your mood! 🌟</p>
            </section>

            <div className="search-bar mb-3">
                <input
                    type="text"
                    placeholder="Search by name or cuisine..."
                    className="form-control"
                    onChange={(e) => {
                        const query = e.target.value.toLowerCase();
                        setMenu(Fooddata.filter(item => item.rname.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)));
                    }}
                />
            </div>

            <section className='filter_section container mt-4'>
                <h2 className='text-center mb-3' style={{ fontWeight: 400 }}>MoodMunch</h2>
                <div className="btn-container d-flex justify-content-around">
                    {['Indian', 'Italian', 'American', 'All'].map(category => (
                        <FilterButton key={category} label={category} onClick={() => filterMenu('category', category)} className={category === 'All', 'Indian', 'Italian', 'American' ? 'btn-secondary' : `btn-${category.toLowerCase()}`} />
                    ))}
                </div>

                <Dropdown className="mt-3">
                    <Dropdown.Toggle variant="info" id="dropdown-basic">Filter by Ambiance</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {['All', 'Cozy', 'Happy', 'Upscale'].map(ambiance => (
                            <Dropdown.Item key={ambiance} onClick={() => filterMenu('ambiance', ambiance)}>{ambiance}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <div className="sort-buttons mt-3 d-flex justify-content-center">
                    {['rating', 'price'].map(type => (
                        <FilterButton key={type} label={`Sort by ${type.charAt(0).toUpperCase() + type.slice(1)}`} onClick={() => sortBy(type)} className="btn-warning mx-2" />
                    ))}
                </div>


            </section>

            <section className='item_section mt-3 container'>
                <div className='container'>
                    <div className="row d-flex justify-content-center align-items-center">
                        {menu.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;


