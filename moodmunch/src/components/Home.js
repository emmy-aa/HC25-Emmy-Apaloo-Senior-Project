/**
 * @file Home.js
 * @description This file contains the Home component, which is the main content area of the application.
 * It dynamically renders a list of restaurants using the `Fooddata` array.
 * The component includes functionality to filter restaurants by category and reset the list to show all items.
 * It also utilizes Bootstrap Cards for the visual representation of restaurant details.
 */


import React, {useState} from 'react'
import Fooddata from './data'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'

const Home = () => {

    const [menu, setMenu] = useState(Fooddata);
    const [ambianceFilter, setAmbianceFilter] = useState('All')

    const filterByCategory = (category) => {
        if (category === 'All') {
            setMenu(Fooddata)
        } else {
            const updatedItems = Fooddata.filter((cur) => cur.category === category)
            setMenu(updatedItems);
        }

    };
    const filterByAmbiance = (ambiance) => {
        setAmbianceFilter(ambiance);
        if (ambiance === "All") {
            setMenu(Fooddata);
        } else {
            // `ambiance` property is added to Fooddata
            const updatedItems = Fooddata.filter((cur) => cur.ambiance === ambiance);
            setMenu(updatedItems);
        }
    };
    const sortBy = (type) => {
        const sortedMenu = [...menu].sort((a, b) => {
            if (type === "rating") return b.rating - a.rating;
            if (type === "price") return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        });
        setMenu(sortedMenu);
    };

    return (
        <>
            <section className='title_section text-center my-4'>
                <h1 className='moodmunch-title'>
                    🍴Mood<span className="highlight">Munch</span>
                </h1>
                <p className="subtitle">Discover food spots tailored to your mood! 🌟</p>
            </section>

            {/* Search Input Functionality*/}
            <div className="search-bar mb-3">
                <input
                    type="text"
                    placeholder="Search by name or cuisine..."
                    className="form-control"
                    onChange={(e) => {
                        const query = e.target.value.toLowerCase();
                        setMenu(Fooddata.filter(item =>
                            item.rname.toLowerCase().includes(query) ||
                            item.category.toLowerCase().includes(query)
                        ));
                    }}
                />
            </div>


            <section className='filter_section container mt-4'>
                <h2 className='text-center mb-3' style={{fontWeight: 400}}>MoodMunch</h2>
                <div className="btn-container d-flex justify-content-around">
                    <button className="btn btn-primary" onClick={() => filterByCategory("Indian")}>Indian</button>
                    <button className="btn btn-success" onClick={() => filterByCategory("Italian")}>Italian</button>
                    <button className="btn btn-danger" onClick={() => filterByCategory("American")}>American</button>
                    <button className="btn btn-secondary" onClick={() => setMenu(Fooddata)}>All</button>
                </div>
                <Dropdown className="mt-3">
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Filter by Ambiance
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => filterByAmbiance("All")}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByAmbiance("Cozy")}>Cozy</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByAmbiance("Happy")}>Happy</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByAmbiance("Upscale")}>Upscale</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="sort-buttons mt-3 d-flex justify-content-center">
                    <button className="btn btn-warning mx-2" onClick={() => sortBy("rating")}>Sort by Rating</button>
                    <button className="btn btn-warning mx-2" onClick={() => sortBy("price")}>Sort by Price</button>
                </div>
            </section>

            <section className='item_section mt-3 container'>
                <div className='container'>
                    <div className="row d-flex justify-content-center align-items-center">
                        {menu.map((e) => {
                            return (
                                <Card key={e.id} style={{width: '22rem', border: "none"}}
                                      className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={e.imgdata} style={{height: "16rem"}} className='mt-3'/>
                                    <Card.Body>
                                        <Card.Title>{e.rname}</Card.Title>
                                        <Card.Text>
                                            Price: {e.price} | Rating: {e.rating}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;


