import React from "react";
import { Button } from "./styled";

const SideButton = ({ isAddMode, onClickButton }: { isAddMode: boolean; onClickButton: () => void }) => {
    return <Button isAddMode={isAddMode} onClick={() => onClickButton()} />;
};

export default SideButton;
