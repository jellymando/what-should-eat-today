import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { filteredPlaceListState } from "store/atom";
import { selectedMemberListSelector } from "store/selector";
import { PlaceType, MemberType } from "types";
import ModalPortal from "components/ModalPortal";
import Modal from "components/Modal";
import HomeMap from "components/HomeMap";
import MemberBox from "components/MemberBox";
import ButtonBox from "components/ButtonBox";
import RandomMap from "components/RandomMap";
import Animation from "components/Anymation";
import { Loading, Notice, Text } from "components/Modal/styled";
import { Image, Name, Profile } from "./styled";

const Home = () => {
    const timerRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalMode, setModalMode] = useState<"random" | "coffee">("random");
    const [isLoading, setIsLoading] = useState(true);
    const filteredPlaceList = useRecoilValue(filteredPlaceListState);
    const selectedMembers = useRecoilValue(selectedMemberListSelector);
    const [randomPlace, setRandomPlace] = useState({} as PlaceType);
    const [coffeeMember, setCoffeeMember] = useState({} as MemberType);

    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (!isOpenModal) return;
        timerRef.current = setTimeout(() => {
            if (modalMode === "random") {
                setRandomPlace(filteredPlaceList[Math.floor(Math.random() * filteredPlaceList.length)]);
            } else {
                setCoffeeMember(selectedMembers[Math.floor(Math.random() * selectedMembers.length)]);
            }
            setIsLoading(false);
        }, 4000);
    }, [isOpenModal]);

    return (
        <>
            <MemberBox />
            <HomeMap />
            <ButtonBox
                buttonText="랜덤 메뉴"
                onClickButton={() => {
                    setIsOpenModal(true);
                    setModalMode("random");
                }}
                buttonTextSecond="커피 내기"
                onClickButtonSecond={() => {
                    setIsOpenModal(true);
                    setModalMode("coffee");
                }}
            />
            {isOpenModal && (
                <ModalPortal>
                    <Modal
                        contents={
                            modalMode === "random" ? (
                                isLoading ? (
                                    <Loading>
                                        <Image>
                                            <img
                                                src="/img/food-loading.gif"
                                                className="food-random-image"
                                                alt="loading"
                                            />
                                        </Image>
                                        <Text>랜덤 메뉴를 고르는 중입니다..</Text>
                                    </Loading>
                                ) : (
                                    <>
                                        <Name>{randomPlace.name}</Name>
                                        <RandomMap place={randomPlace} />
                                        <Text>여기로 고고!</Text>
                                        <Animation />
                                    </>
                                )
                            ) : selectedMembers.length < 2 ? (
                                <Notice>멤버를 2명 이상 선택해주세요.</Notice>
                            ) : isLoading ? (
                                <Loading>
                                    <Image>
                                        <img
                                            src="/img/coffee-loading.gif"
                                            className="coffee-random-image"
                                            alt="loading"
                                        />
                                    </Image>
                                    <Text>돈 쓸 인간을 고르는 중입니다..</Text>
                                </Loading>
                            ) : (
                                <>
                                    <Profile imageUrl={coffeeMember.profileImage} />
                                    <Name>{coffeeMember.name}</Name>
                                    <Animation />
                                </>
                            )
                        }
                        onClickCloseButton={() => {
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
