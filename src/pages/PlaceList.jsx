import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaceListMap from "../components/PlaceListMap";
import SearchBox from "../components/SearchBox";
import ButtonBox from "../components/ButtonBox";

const PlaceList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPlace, setSelectedPlace] = useState({ name: "", x: 0, y: 0 });
  const addPlace = async () => {
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
      <SearchBox setSearchKeyword={setSearchKeyword} />
      <PlaceListMap
        searchKeyword={searchKeyword}
        setSelectedPlace={setSelectedPlace}
      />
      <ButtonBox handleClick={addPlace} />
    </>
  );
};

export default PlaceList;
