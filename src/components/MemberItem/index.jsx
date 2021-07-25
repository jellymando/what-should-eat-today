import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { memberListSelector, selectedMemberListSelector } from "store/selector";
import { AddMember, Member, Name } from "./styled";

export const AddMemberItem = ({ handleClickAddMember }) => {
    return <AddMember onClick={handleClickAddMember} />;
};

export const MemberItem = ({ profileImage, name, selected = false }) => {
    const [isSelected, setIsSeleted] = useState(selected);
    const memberList = useRecoilValue(memberListSelector);
    const [selectedMembers, setSelectedMembers] = useRecoilState(selectedMemberListSelector);

    const selecteMemberHandler = (name) => {
        setIsSeleted(!isSelected);
        if (!isSelected) {
            const selectedMember = memberList.filter((member) => member.name === name);
            setSelectedMembers([...selectedMembers, ...selectedMember]);
        } else {
            const unSelectedMembers = selectedMembers.filter((member) => member.name !== name);
            setSelectedMembers([...unSelectedMembers]);
        }
    };

    return (
        <Member isSelected={isSelected} imageUrl={profileImage} onClick={() => selecteMemberHandler(name)}>
            <Name>{name}</Name>
        </Member>
    );
};
