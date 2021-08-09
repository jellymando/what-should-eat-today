import React, { useState } from "react";
import { AddMember, Member, Name } from "./styled";

export const AddMemberItem = ({ handleClickAddMember }: { handleClickAddMember: () => void }) => {
    return <AddMember onClick={handleClickAddMember} />;
};

export const MemberItem = ({
    profileImage,
    name,
    selected = false,
    handleClickMember,
}: {
    profileImage: string;
    name: string;
    selected?: boolean;
    handleClickMember: ({
        setIsSeleted,
        isSelected,
        name,
    }: {
        setIsSeleted: (isSelcted: boolean) => void;
        isSelected: boolean;
        name: string;
    }) => void;
}) => {
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
