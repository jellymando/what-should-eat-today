/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import { MAP } from "../../constants/constant";
import { MapContainer } from "./styled";

const Map = ({ placeList, searchKeyword, setSelectedPlace }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const options = {
    center: new kakao.maps.LatLng(MAP.CENTER.Y, MAP.CENTER.X),
    level: 4,
  };
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  const markerImg =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const markerSize = new kakao.maps.Size(24, 35);
  const markerImage = new kakao.maps.MarkerImage(markerImg, markerSize);

  const displayMarker = ({ placeName, position }) => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: position,
      title: placeName,
      image: markerImage,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' + placeName + "</div>"
      );
      infowindow.open(map, marker);

      if (setSelectedPlace) {
        setSelectedPlace({
          name: placeName,
          x: parseFloat(position.La),
          y: parseFloat(position.Ma),
        });
      }
    });
  };

  useEffect(() => {
    if (!mapRef.current) return;
    setMap(new kakao.maps.Map(mapRef.current, options));
  }, [mapRef]);

  useEffect(() => {
    if (!placeList) return;

    for (let i in placeList) {
      const position = new kakao.maps.LatLng(
        placeList[i].latlng.y,
        placeList[i].latlng.x
      );
      displayMarker({
        placeName: placeList[i].name,
        position,
      });
    }
  }, [placeList]);

  useEffect(() => {
    if (searchKeyword) {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(searchKeyword, placesSearchCB);

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          for (let i = 0; i < data.length; i++) {
            const position = new kakao.maps.LatLng(data[i].y, data[i].x);
            displayMarker({
              placeName: data[i].place_name,
              position,
            });
          }
        }
      }
    }
  }, [searchKeyword]);

  return <MapContainer ref={mapRef} />;
};

export default Map;
