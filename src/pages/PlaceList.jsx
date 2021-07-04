import React, { useState } from "react";
import Map from "../components/Map";
import Search from "../components/Search";

const PlaceList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

  return (
    <>
      <Search setSearchKeyword={setSearchKeyword} />
      <Map searchKeyword={searchKeyword} />
    </>
  );
};

export default PlaceList;
