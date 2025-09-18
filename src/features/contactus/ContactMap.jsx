import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function ContactMap() {
    const position = [23.70461469634399, 90.39796133526958];
    
    return (
        <div className="col-span-1 h-64 md:h-[500px] rounded">
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={false} 
                className="w-full h-full rounded-md"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>We are here!</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default ContactMap;
