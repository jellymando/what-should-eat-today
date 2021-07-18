import React from "react";
import { Button } from "./styled";

const SideButton = ({ isAddMode, handleClickButton }) => {
    return <Button isAddMode={isAddMode} onClick={() => handleClickButton()} />;
};

export default SideButton;
