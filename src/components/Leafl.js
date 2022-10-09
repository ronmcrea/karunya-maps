import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const Leaf = () => {
    return (
        <div className='Mapcontain'>
            <iframe width="550" height="400" frameborder="0" src="https://widgets.scribblemaps.com/sm/?d&z&l&gc&af&sc&mc&lat=10.937227943&lng=76.741783785&vz=16&type=custom_style&ti&s&width=550&height=400&id=gCGcXFWvEL" style="border:0; max-width: 100%;" allowfullscreen allow="geolocation" loading="lazy"></iframe>
        </div>
    )
}

export default Leaf;