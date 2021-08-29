import React, { useState } from "react";
import { AddMember, Member, Name } from "./styled";

export const AddMemberItem = ({ onClickAddMember }: { onClickAddMember: () => void }) => {
    return <AddMember onClick={onClickAddMember} />;
};

export const MemberItem = ({
    profileImage,
    name,
    selected = false,
    onClickMember,
}: {
    profileImage: string;
    name: string;
    selected?: boolean;
    onClickMember: ({
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
            onClick={() => onClickMember({ setIsSeleted, isSelected, name })}
        >
            <Name>{name}</Name>
        </Member>
    );
};
