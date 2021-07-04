import React, { useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";

const Home = () => {
  const getPlaces = async () => {
    try {
      const res = await axios.get("/places");
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPlaces();
  }, []);
  return (
    <>
      <Map />
    </>
  );
};

export default Home;
