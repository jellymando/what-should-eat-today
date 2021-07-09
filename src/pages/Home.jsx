/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import HomeMap from "../components/HomeMap";
import { placeListState } from "store/atom";
import { getPlaces } from "api/place";

const Home = () => {
    const [placeList, setPlaceList] = useRecoilState(placeListState);

    useEffect(async () => {
        const places = await getPlaces();
        setPlaceList(places);
    }, []);

    return (
        <>
            <HomeMap placeList={placeList} />
        </>
    );
};

export default Home;
