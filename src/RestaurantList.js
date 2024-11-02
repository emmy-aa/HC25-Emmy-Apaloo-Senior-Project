import React from 'react';

const RestaurantList = ({ restaurants }) => {
    return (
        <section id="restaurant-list">
            <h2>Restaurants</h2>
            <ul>
                {restaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default RestaurantList;
