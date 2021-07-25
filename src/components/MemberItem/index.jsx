import React, { useState } from "react";
import { AddMember, Member, Name } from "./styled";

export const AddMemberItem = ({ handleClickAddMember }) => {
    return <AddMember onClick={handleClickAddMember} />;
};

export const MemberItem = ({ profileImage, name, selected = false, handleClickMember }) => {
    const [isSelected, setIsSeleted] = useState(selected);

    return (
        <Member
            isSelected={isSelected}
            imageUrl={profileImage}
            onClick={() => handleClickMember({ setIsSeleted, isSelected, name })}
        >
            <Name>{name}</Name>
        </Member>
    );
};
