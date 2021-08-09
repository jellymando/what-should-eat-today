import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { filteredPlaceListState } from "store/atom";
import { PlaceType } from "types";
import ModalPortal from "components/ModalPortal";
import Modal from "components/Modal";
import HomeMap from "components/HomeMap";
import MemberBox from "components/MemberBox";
import ButtonBox from "components/ButtonBox";
import RandomMap from "components/RandomMap";
import Animation from "components/Anymation";
import { Loading, Text, PlaceName } from "./styled";

const Home = () => {
    const timerRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const filteredPlaceList = useRecoilValue(filteredPlaceListState);
    const [randomPlace, setRandomPlace] = useState({} as PlaceType);

    useEffect(() => {
        if (!isOpenModal) return;
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setRandomPlace(filteredPlaceList[Math.floor(Math.random() * filteredPlaceList.length)]);
            setIsLoading(false);
        }, 4000);
    }, [isOpenModal]);

    useEffect(() => {
        console.log("filteredPlaceList", filteredPlaceList);
        console.log("randomPlace", randomPlace);
    }, [filteredPlaceList, randomPlace]);

    return (
        <>
            <MemberBox />
            <HomeMap />
            <ButtonBox buttonText="랜덤 메뉴" handleClickButton={() => setIsOpenModal(true)} />
            {isOpenModal && (
                <ModalPortal>
                    <Modal
                        contents={
                            isLoading ? (
                                <Loading>
                                    <img src="/img/random-loading.gif" alt="loading" />
                                    <Text>랜덤 메뉴를 고르는 중입니다..</Text>
                                </Loading>
                            ) : (
                                <>
                                    <PlaceName>{randomPlace.name}</PlaceName>
                                    <RandomMap place={randomPlace} />
                                    <Text>여기로 고고!</Text>
                                    <Animation />
                                </>
                            )
                        }
                        handleClickCloseButton={() => {
                            setIsOpenModal(false);
                            setIsLoading(true);
                        }}
                    />
                </ModalPortal>
            )}
        </>
    );
};

export default Home;