/**
 * @file App.js
 * @description This is the main entry point for the React application.
 * It imports and renders the Header and Home components, as well as global styles.
 * The file sets up the overall structure and layout of the application.
 */


import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import "./components/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <Header />
            <Home />
        </>
    );
}

export default App;