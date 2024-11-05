# Interactive Food Map with Google Maps API and React

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

At this point, you should see a Google Map centered over New York

![6299DA19-CB10-4464-A84C-00249FD88135_1_201_a](https://github.com/user-attachments/assets/f0bef51b-c7b3-4577-938b-474d29414a7e)


### Section 3: Adding and Customizing Markers

1. Adding markers to the map:

   - To make your map interactive, add markers representing different locations. Here, you can customize it and add whatever marker you want.
     

     ```
     import { Marker } from '@react-google-maps/api';

     const locations = [
       { lat: 40.748817, lng: -73.985428, name: 'Restaurant 1' },
       { lat: 40.748937, lng: -73.987428, name: 'Restaurant 2' },
     ];

     function App() {
       return (
         <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
           <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
              {locations.map((location, index) => (
                 <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
              ))}
           </GoogleMap>
         </LoadScript>
        );
     }
    

2. Customizing Markers:

   - You can customize markers by adding icons or labels:

     ```
      <Marker
        position={{ lat: 40.748817, lng: -73.985428 }}
        icon={{
          url: '/custom-icon.png',
          scaledSize: new window.google.maps.Size(40, 40),
        }}
     />
     
     ```

### Section 4: Filtering Map Data Based on User Inputs

1. Storing user input:

   - You can store user input using React state, allowing users to filter restaurants based on cuisine, location, etc.

     ```
     const [selectedCuisine, setSelectedCuisine] = useState('All');

     const filteredLocations = selectedCuisine === 'All'
       ? locations
       : locations.filter(location => location.cuisine === selectedCuisine);
     ```
     
2. Rendering filtered markers:

   - Use the **filteredLocations** array to render only the relevant markers.

     ```
     {filteredLocations.map((location, index) => (
       <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
     ))}
     ```

3. Practice Exercise:

   - Add a dropdown menu allowing users to filter by cuisine.
     
   - Implement additional markers and a new map feature, such as clustering.


### See Also:

- [Google Maps API Documentation](https://developers.google.com/maps/documentation/javascript)

- [React Google Maps API Library](https://www.npmjs.com/package/@react-google-maps/api)


### Summary

By the end of this tutorial, you should have successfully integrated Google Maps into your React app, added markers, and implemented user input for filtering data. You now have the foundation to further customize your app, such as adding search functionality or optimizing performance with marker clustering.


**Practice Exercise 2:**

- Customize your map with a theme (e.g., night mode) using the Google Maps Styling Wizard.

- Allow users to click on markers to view more details about the restaurant in an info window.


### Conclusion:

This tutorial covered the essential aspects of integrating Google Maps with React and creating an interactive food map. You now have the tools to expand this functionality with advanced features like data filtering and custom map themes.

     


   

   


   


    
    




