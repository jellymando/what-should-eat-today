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
import { Container, Form, List, Title, Input } from "./styled";

const Member = () => {
    const [isAddMode, setIsAddMode] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useRecoilState(selectedKeywordsState);
    const inputRef = useRef(null);
    const memberList = useRecoilValue(memberListSelector);
    const setMemberQuery = useSetRecoilState(membersQueryState);

    const addMemberButtonHandler = async () => {
        const name = inputRef.current.value.trim();
        if (!name.length > 0) return alert(MESSAGE.MEMBERS.ERROR.EMPTY);
        const { success, err } = await addMember({ name, keywords: selectedKeywords });
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert(MESSAGE.MEMBERS.ERROR.EXIST);
                    break;
            }
        } else {
            inputRef.current.value = "";
            setSelectedKeywords([]);
            setMemberQuery(name);
            setIsAddMode(false);
        }
    };

    const deleteMemberButtonHandler = async (id) => {
        const { success, err } = await deleteMember(id);
        if (success) {
            setMemberQuery(id);
        }
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [isAddMode, inputRef, KeywordBox]);

    return (
        <>
            {isAddMode ? (
                <Container>
                    <Form>
                        <List>
                            <Title>나의 이름은</Title>
                            <Input ref={inputRef} />
                        </List>
                        <List>
                            <Title>못 먹는 음식은</Title>
                            <KeywordBox />
                        </List>
                    </Form>
                    <ButtonBox buttonText="멤버 추가" handleClickButton={addMemberButtonHandler} />
                </Container>
            ) : (
                <ListBox list={memberList} handleClickDeleteButton={deleteMemberButtonHandler} />
            )}
            <SideButton isAddMode={isAddMode} handleClickButton={() => setIsAddMode(!isAddMode)} />
        </>
    );
};

export default Member;
