import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ restaurants }) => {
    return (
        <MapContainer center={[38.735, -85.379]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {restaurants.map((restaurant) => (
                <Marker key={restaurant.id} position={[restaurant.latitude, restaurant.longitude]}>
                    <Popup>
                        <strong>{restaurant.name}</strong> <br />
                        {restaurant.address} <br />
                        Rating: {restaurant.rating}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
