import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function StudioMap() {
  const position = [13.0827, 80.2707];
  return (
    <div
      style={{
        width: "300px",
      }}
    >
      <MapContainer center={position} zoom={14} className="leaflet-map">
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Placeholder Photograhpy Studio <br /> Chennai.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
