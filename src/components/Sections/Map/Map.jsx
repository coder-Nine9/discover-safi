import SectionHeader from "../../Sections/SectionHeader";
import { contentList } from "../../Data/Beaches";
import { Marker } from "react-leaflet";
import Container from "./Container";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import BeachIcon from "../../../assets/icons/BeachIcon.png";
import L from "leaflet";
import "leaflet-routing-machine";
const BeachMarker = L.icon({
  iconUrl: BeachIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});
export default function Map() {
  const [userPosition, setUserPosition] = useState(null);
  const [destination, setDestination] = useState(null);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (Position) => {
        const userLocation = {
          lat: Position.coords.latitude,
          lng: Position.coords.longitude,
        };
        setUserPosition(userLocation);
      },
      (error) => {
        console.log(error.message);
      },
    );
  };
  function handleDestination(userDestination) {
    setDestination(userDestination);
  }
  return (
    <section className="py-30" id="Map">
      <div className="px-4 lg:px-8 max-w-[81.5%] m-auto">
        <SectionHeader
          label="Plan your route"
          title="Find your way to the coast"
          description="Share your location too see live distance and drive-time estimates to
        every beach featured on this page."
        />

        <div className=" flex justify-evenly flex-col-reverse  xl:flex-row gap-10">
          <MapContainer
            center={
              userPosition === null
                ? [32.2994, -9.2372]
                : [userPosition.lat, userPosition.lng]
            }
            zoom={userPosition === null ? 12 : 15}
            className=" border-5 border-[#0F3B54] rounded-lg w-full h-100 xl:w-400 xl:h-100 z-1"
          >
            <TileLayer
              url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            {userPosition && (
              <>
                <Marker position={[userPosition.lat, userPosition.lng]} />
                <ChangeView position={[userPosition.lat, userPosition.lng]} />
              </>
            )}
            <Routing userPosition={userPosition} destination={destination} />
            <BeachesMarkers beaches={contentList} icon={BeachMarker} />
          </MapContainer>

          <Container
            getUserLocation={getUserLocation}
            handleDestination={handleDestination}
          />
        </div>
      </div>
    </section>
  );
}

function ChangeView({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position, 15);
  }, [position, map]);
  return null;
}

function BeachesMarkers({ beaches, icon }) {
  return (
    <>
      {beaches.map((beach) => {
        return (
          <Marker
            key={beach.id}
            position={[beach.lat, beach.lng]}
            icon={icon}
          />
        );
      })}
    </>
  );
}

function Routing({ userPosition, destination }) {
  const map = useMap();
  const routingControl = useRef(null);

  useEffect(() => {
    if (!userPosition || !destination) return;

    if (routingControl.current) {
      map.removeControl(routingControl.current);
    }
    routingControl.current = L.Routing.control({
      waypoints: [
        L.latLng(userPosition.lat, userPosition.lng),
        L.latLng(destination.lat, destination.lng),
      ],
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
    }).addTo(map);

    console.log(userPosition);
    console.log(destination);
  }, [userPosition, destination, map]);
  return null;
}
