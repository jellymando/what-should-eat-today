import React, { useState, useRef, useEffect } from "react";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { selectedKeywordsState, membersQueryState } from "store/atom";
import { memberListSelector } from "store/selector";
import { addMember, deleteMember } from "api/member";
import { MESSAGE } from "constants/message";
import ListBox from "components/ListBox";
import ButtonBox from "components/ButtonBox";
import KeywordBox from "components/KeywordBox";
import SideButton from "components/SideButton";
import ModalPortal from "components/ModalPortal";
import Modal from "components/Modal";
import { Container, Form, List, Title, Input, Profile } from "./styled";

const Member = () => {
    const [isAddMode, setIsAddMode] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useRecoilState(selectedKeywordsState);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const urlInputRef = useRef<HTMLInputElement>(null);
    const memberList = useRecoilValue(memberListSelector);
    const setMemberQuery = useSetRecoilState(membersQueryState);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [isErrorMsg, setIsErrorMsg] = useState(false);

    const handleAddProfileImage = () => {
        const urlMatch = /(http(s)?:\/\/)([a-z0-9\w]+\.)+[a-z0-9]{2,4}(.*?)\.((jpe?|pn)g|gif)/gi.test(
            urlInputRef.current!.value
        );
        if (urlMatch) {
            setImageUrl(urlInputRef.current!.value);
            setIsOpenModal(false);
        } else {
            setIsErrorMsg(true);
        }
    };

    const handleAddMember = async () => {
        const name = nameInputRef.current!.value.trim();
        if (!(name.length > 0)) return alert(MESSAGE.MEMBERS.ERROR.EMPTY);
        const { success, err } = await addMember({ profileImage: imageUrl, name, keywords: selectedKeywords });
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert(MESSAGE.MEMBERS.ERROR.EXIST);
                    break;
            }
        } else {
            setMemberQuery(name);
            setIsAddMode(false);
        }
    };

    const handleDeleteMember = async (id: string) => {
        const { success, err } = await deleteMember(id);
        if (success) setMemberQuery(id);
    };

    useEffect(() => {
        if (isAddMode) {
            if (nameInputRef.current) nameInputRef.current.focus();
        } else {
            setImageUrl("");
            setSelectedKeywords([]);
        }
    }, [isAddMode]);

    useEffect(() => {
        if (isOpenModal && urlInputRef.current) urlInputRef.current.focus();
        if (!isOpenModal) setIsErrorMsg(false);
    }, [isOpenModal]);

    return (
        <>
            {isAddMode ? (
                <Container>
                    <Form>
                        <List>
                            <Title>프로필 사진</Title>
                            <Profile imageUrl={imageUrl} onClick={() => setIsOpenModal(true)} />
                        </List>
                        <List>
                            <Title>이름</Title>
                            <Input ref={nameInputRef} />
                        </List>
                        <List>
                            <Title>못 먹는 음식</Title>
                            <KeywordBox />
                        </List>
                    </Form>
                    <ButtonBox buttonText="멤버 추가" onClickButton={handleAddMember} />
                </Container>
            ) : (
                <ListBox list={memberList} onClickDeleteButton={handleDeleteMember} hasImage={true} />
            )}
            <SideButton isAddMode={isAddMode} onClickButton={() => setIsAddMode(!isAddMode)} />
            {isOpenModal && (
                <ModalPortal>
                    <Modal
                        title="이미지 URL"
                        inputRef={urlInputRef}
                        isErrorMsg={isErrorMsg}
                        errorMsg="URL 형식을 확인해주세요."
                        onClickSubmitButton={() => handleAddProfileImage()}
                        onClickCloseButton={() => setIsOpenModal(false)}
                    />
                </ModalPortal>
            )}
        </>
    );
};

export default Member;
