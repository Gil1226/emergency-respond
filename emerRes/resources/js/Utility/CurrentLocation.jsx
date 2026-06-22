function CurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;

                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`
                )

                const data = await response.json();

                resolve({
                    latitude: lat,
                    longitude: long,
                    address: data.address
                });
            },
            (error) =>{
                reject(error)
            }
        )
    })
}

export default CurrentLocation;

