## Interactive Food Map with Google Maps API and React

### Introduction

In this tutorial, you will learn how to integrate **Google Maps** into a **React** application. This guide is aimed at beginner-to-intermediate developers familiar with React but new to working with APIs. By the end of this tutorial, you'll be able to display a map, customize markers, filter map data based on user perferences, and dynamically interact with map elements.


### Learning Objectives:

- Understand how to set up the Google Maps API in a React environment.
- Customize map markers and add interactivity.
- Filter map data dynamically based on user inputs.
- Navigate through multiple sections of the tutorial via a structured Markdown document.


### Prerequisites

To follow this tutorial, you will need:

- Basic knowledge of React and JavaScript.
- Node.js installed on your computer.
- A Google Cloud account to generate an API key for Google Maps.
- Familiarity with GitHub Pages (optional if you want to publish the project online).


### Installed Tools:

1. Node.js
2. npm
3. Google Cloud Platform account (for API key generation)
4. React Google Maps API library


### Section 1: Setting Up the Project

1. Create a new React app:
   
   ```
   npx create-react-app interactive-food-map

   cd interactive-food-map

   ```

2. Install the required Google Maps API library:

   ```
   npm install @react-google-maps/api

   ```
   
3. Generate your Google Maps API key:

- Go to Google Cloud Console, create a new project, and enable the "Maps JavaScript API."
- Generate an API key and keep it handy for the next step.

4. Add your API key to your React environment by creating a .env file

- Create a .env file at the root of your project with the foloowing content:
  
```
REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key-here

```

### Section 2: Creating the Map Component

1. Set up a basic Google Map in your React App

   - Open *App.js* and replace its contents with this:

     ```
     import React from 'react';
     import { GoogleMap, LoadScript } from '@react-google-maps/api';

     const containerStyle = {
       width: '100%',
       height: '400px',
     };

     const center = {
       lat: 40.748817,
       lng: -73.985428, // Coordinates for New York
     };

     function App() {
       return (
         <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
           <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
           </GoogleMap>
         </LoadScript>
       );
     }

     export default App;
     
   
 2. Run the Application:

   ```
   npm start

   ```

    
    




