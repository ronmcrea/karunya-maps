import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const Leaf = () => {
    return (
        <div className='Mapcontain'>
            <iframe width="550" height="400" frameborder="0" src="MAP SOURCE" style="border:0; max-width: 100%;" allowfullscreen allow="geolocation" loading="lazy"></iframe>
        </div>
    )
}

export default Leaf;
