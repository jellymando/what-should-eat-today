/* eslint-disable no-undef */
import React, { useRef, useState, useEffect, useMemo } from "react";
import { MAP } from "../../constants/constant";
import { MapContainer } from "./styled";

const Map = ({ placeList, searchKeyword }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const options = {
    center: new kakao.maps.LatLng(MAP.CENTER.X, MAP.CENTER.Y),
    level: 4,
  };
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  const markerImg =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const markerSize = new kakao.maps.Size(24, 35);

  useEffect(() => {
    if (!mapRef.current) return;
    setMap(new kakao.maps.Map(mapRef.current, options));
  }, [mapRef]);

  useEffect(() => {
    if (!placeList) return;

    for (let i in placeList) {
      const markerImage = new kakao.maps.MarkerImage(markerImg, markerSize);

      const position = new kakao.maps.LatLng(
        placeList[i].latlng.x,
        placeList[i].latlng.y
      );

      const marker = new kakao.maps.Marker({
        map: map,
        position: position,
        title: placeList[i].title,
        image: markerImage,
      });
    }
  }, [placeList]);

  useEffect(() => {
    if (searchKeyword) {
      // 장소 검색 객체를 생성합니다
      const ps = new kakao.maps.services.Places();
      // 키워드로 장소를 검색합니다
      ps.keywordSearch(searchKeyword, placesSearchCB);

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          console.log("data", data);

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
          }
        }
      }

      // 지도에 마커를 표시하는 함수입니다
      function displayMarker(place) {
        // 마커를 생성하고 지도에 표시합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });
      }
    }
  }, [searchKeyword]);

  return <MapContainer ref={mapRef}></MapContainer>;
};

export default Map;
