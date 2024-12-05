import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore instance

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from Firestore
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "restaurants"));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setRestaurants(data);
            } catch (err) {
                console.error("Error fetching restaurants:", err);
                setError("Failed to load restaurants. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <section id="restaurant-list">
            <h2>Restaurants</h2>
            {loading ? (
                <p>Loading restaurants...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {restaurants.length > 0 ? (
                        restaurants.map(restaurant => (
                            <li key={restaurant.id}>
                                <strong>{restaurant.name}</strong> - {restaurant.cuisine}
                            </li>
                        ))
                    ) : (
                        <p>No restaurants match this mood.</p>
                    )}
                </ul>
            )}
        </section>
    );
};

export default RestaurantList;
