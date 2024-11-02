// src/MoodMunch.js
import React, { useState } from 'react';
import RestaurantList from './RestaurantList';
import MoodFilters from './MoodFilters';
import './MoodMunch.css';

const MoodMunch = () => {
    const [filteredMood, setFilteredMood] = useState(null);

    const restaurants = [
        { name: "Happy Burger", mood: "happy" },
        { name: "Adventure Bistro", mood: "adventurous" },
        { name: "Cozy Café", mood: "cozy" },
        { name: "Romantic Rooftop", mood: "romantic" },
    ];

    const filteredRestaurants = filteredMood
        ? restaurants.filter(restaurant => restaurant.mood === filteredMood)
        : restaurants;

    return (
        <div className="app-container">
            <header>
                <h1>MoodMunch</h1>
                <p>Discover food spots based on your mood and preferences!</p>
            </header>

            <MoodFilters onMoodSelect={setFilteredMood} />
            <RestaurantList restaurants={filteredRestaurants} />

            <footer>
                <p>Designed by Emmy © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default MoodMunch;
