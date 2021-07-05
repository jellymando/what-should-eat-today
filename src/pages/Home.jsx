/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeMap from "../components/HomeMap";

const Home = () => {
  const [placeList, setPlaceList] = useState([]);
  const getPlaces = async () => {
    const res = await axios.get("/places");
    const data = res.data;
    if (data) {
      const places = [];
      for (let i in data) {
        places.push({
          name: data[i].name,
          latlng: {
            x: data[i].latlng.x,
            y: data[i].latlng.y,
          },
        });
      }
      setPlaceList(places);
    }
  };

  useEffect(() => {
    getPlaces();
  }, []);

  useEffect(() => {
    console.log("placeList", placeList);
  }, [placeList]);

  return (
    <>
      <HomeMap placeList={placeList} />
    </>
  );
};

export default Home;
