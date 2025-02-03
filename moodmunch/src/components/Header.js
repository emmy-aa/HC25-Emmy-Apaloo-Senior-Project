/**
 * @file Header.js
 * @description This file defines the Header component, which represents the navigation bar of the application.
 * It uses Bootstrap's Navbar for styling and includes navigation links for Home, Features, and Pricing.
 * The Header component is rendered at the top of the application.
 */


import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaMoon, FaSun, FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = ({ onSearch, theme, toggleTheme }) => {
    const [query, setQuery] = useState('');

    return (
        <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme} expand="lg" fixed="top">
            <Container>
                {/* Logo */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src="/assets/moodmunch-logo.png" alt="MoodMunch" style={{ height: '50px', marginRight: '10px' }} />
                    <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>MoodMunch</span>
                </Navbar.Brand>

                {/* Toggle Button for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Navigation Links */}
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/features" className="nav-link">Features</NavLink>
                        <NavLink to="/pricing" className="nav-link">Pricing</NavLink>

                        {/* Dropdown for categories */}
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-categories">
                                Categories
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/category/indian">Indian</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/category/italian">Italian</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/category/american">American</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                    {/* Search Bar */}
                    <Form className="d-flex mx-2">
                        <FormControl
                            type="search"
                            placeholder="Search restaurants..."
                            className="me-2"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button variant="outline-success" onClick={() => onSearch(query)}>
                            <FaSearch />
                        </Button>
                    </Form>

                    {/* Dark Mode Toggle */}
                    <Button variant="outline-secondary" onClick={toggleTheme} className="mx-2">
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </Button>

                    {/* User Profile */}
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary">
                            <FaUserCircle size={20} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end">
                            <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

