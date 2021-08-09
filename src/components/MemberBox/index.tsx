import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { memberListSelector, selectedMemberListSelector } from "store/selector";
import { MemberType } from "types";
import { AddMemberItem, MemberItem } from "components/MemberItem";
import ModalPortal from "components/ModalPortal";
import Modal from "components/Modal";
import { Container, MemberWrap, Input } from "./styled";

const MemberBox = () => {
    const memberList = useRecoilValue(memberListSelector);
    const [selectedMembers, setSelectedMembers] = useRecoilState(selectedMemberListSelector);
    const [filteredMembers, setFilteredMembers] = useState(memberList);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const timerRef: { current: NodeJS.Timeout | null } = useRef(null);

    const searchMemberHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setFilteredMembers(memberList.filter((member: MemberType) => member.name.includes(target?.value)));
        }, 300);
    };

    const selectMemberHandler = ({
        setIsSeleted,
        isSelected,
        name,
    }: {
        setIsSeleted: (isSelcted: boolean) => void;
        isSelected: boolean;
        name: string;
    }) => {
        setIsSeleted(!isSelected);
        if (!isSelected) {
            const selectedMember = memberList.filter((member: MemberType) => member.name === name);
            setSelectedMembers([...selectedMembers, ...selectedMember]);
        } else {
            unselectMemberHandler({ name });
        }
    };

    const unselectMemberHandler = ({ name }: { name: string }) => {
        const unselectedMembers = selectedMembers.filter((member) => member.name !== name);
        setSelectedMembers([...unselectedMembers]);
    };

    useEffect(() => {
        if (isOpenModal && inputRef.current) inputRef.current!.focus();
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
                                <MemberItem
                                    key={member._id}
                                    profileImage={member.profileImage}
                                    name={member.name}
                                    handleClickMember={unselectMemberHandler}
                                />
                            );
                        })}
                </MemberWrap>
            </Container>
            {isOpenModal && (
                <ModalPortal>
                    <Modal
                        title="같이 밥먹을 파티원 추가"
                        contents={
                            <>
                                <Input ref={inputRef} onChange={(e) => searchMemberHandler(e)} />
                                <MemberWrap>
                                    {filteredMembers.length > 0 &&
                                        filteredMembers.map((member: MemberType) => {
                                            return (
                                                <MemberItem
                                                    key={member._id}
                                                    profileImage={member.profileImage}
                                                    name={member.name}
                                                    selected={
                                                        !!selectedMembers.find(
                                                            (selectedMember) => selectedMember.name === member.name
                                                        )
                                                    }
                                                    handleClickMember={selectMemberHandler}
                                                />
                                            );
                                        })}
                                </MemberWrap>
                            </>
                        }
                        handleClickCloseButton={() => setIsOpenModal(false)}
                    />
                </ModalPortal>
            )}
        </>
    );
};

export default MemberBox;
