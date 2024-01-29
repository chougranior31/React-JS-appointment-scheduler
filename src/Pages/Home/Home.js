import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const userId = 1;  // Remplacez par l'ID utilisateur que vous souhaitez récupérer

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/location/${userId}`);
                setLocation(response.data);
            } catch (err) {
                setError('Erreur lors de la récupération de la localisation.');
            }
        };

        fetchLocation();
    }, [userId]);


    console.log(location);

    return (
        <div>
            <h1>user location </h1>
            <div>
                <h2>location : </h2>
                {error && <p>{error}</p>}
                {location ? (
                    <div>
                        <p>Latitude: {location.latitude}</p>
                        <p>Longitude: {location.longitude}</p>
                    </div>
                ) : (
                    <p>Chargement de la localisation...</p>
                )}
            </div>
        </div>
    );
}

export default Home;
