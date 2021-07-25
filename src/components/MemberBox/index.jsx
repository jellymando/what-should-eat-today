import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { isModalOpenState } from "store/atom";
import { memberListSelector, selectedMemberListSelector } from "store/selector";
import { AddMemberItem, MemberItem } from "components/MemberItem";
import ModalPortal from "components/ModalPortal";
import Modal from "components/Modal";
import { Container, MemberWrap, Input } from "./styled";

const MemberBox = () => {
    const memberList = useRecoilValue(memberListSelector);
    const selectedMembers = useRecoilValue(selectedMemberListSelector);
    const [filteredMembers, setFilteredMembers] = useState(memberList);
    const [isOpenModal, setIsOpenModal] = useRecoilState(isModalOpenState);
    const inputRef = useRef(null);
    const timerRef = useRef(0);

    const searchMemberHandler = ({ target }) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setFilteredMembers(memberList.filter((member) => member.name.includes(target.value)));
        }, 300);
    };

    const searchMemberForm = () => {
        return (
            <>
                <Input ref={inputRef} onChange={(e) => searchMemberHandler(e)} />
                <MemberWrap>
                    {filteredMembers.length > 0 &&
                        filteredMembers.map((member) => {
                            return (
                                <MemberItem
                                    key={member._id}
                                    profileImage={member.profileImage}
                                    name={member.name}
                                    selected={selectedMembers.find(
                                        (selectedMember) => selectedMember.name === member.name
                                    )}
                                />
                            );
                        })}
                </MemberWrap>
            </>
        );
    };

    useEffect(() => {
        if (isOpenModal && inputRef.current) inputRef.current.focus();
        if (!isOpenModal) setFilteredMembers(memberList);
    }, [isOpenModal]);

    return (
        <>
            <Container>
                <MemberWrap>
                    <AddMemberItem handleClickAddMember={() => setIsOpenModal(true)} />
                    {selectedMembers.length > 0 &&
                        selectedMembers.map((member) => {
                            return (
                                <MemberItem key={member._id} profileImage={member.profileImage} name={member.name} />
                            );
                        })}
                </MemberWrap>
            </Container>
            {isOpenModal && (
                <ModalPortal>
                    <Modal title="같이 밥먹을 파티원 추가" contents={searchMemberForm()} />
                </ModalPortal>
            )}
        </>
    );
};

export default MemberBox;
