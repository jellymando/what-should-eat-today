import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import Search from "../components/Search";
import Button from "../components/Button";

const PlaceList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPlace, setSelectedPlace] = useState({ name: "", x: 0, y: 0 });
  const addPlace = async () => {
    console.log("selectedPlace", selectedPlace);
    await axios.post("/places", {
      name: selectedPlace.name,
      latlng: {
        x: selectedPlace.x,
        y: selectedPlace.y,
      },
    });
  };

  useEffect(() => {
    console.log("selectedPlace", selectedPlace);
  }, [selectedPlace]);

  return (
    <>
      <Search setSearchKeyword={setSearchKeyword} />
      <Map searchKeyword={searchKeyword} setSelectedPlace={setSelectedPlace} />
      <Button handleClick={addPlace} />
    </>
  );
};

export default PlaceList;
