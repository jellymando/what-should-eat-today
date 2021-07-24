import React, { useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "store/atom";
import { Container, ModalWrap, Content, ButtonWrap, Button } from "./styled";

const Modal = ({ contents, handleClickSubmitButton }) => {
    const modalRef = useRef(null);
    const setIsOpenModal = useSetRecoilState(isModalOpenState);

    useEffect(() => {
        if (!modalRef.current) return;
        document.addEventListener("click", function (e) {
            if (e.target === modalRef.current) setIsOpenModal(false);
        });
        return () => {
            document.removeEventListener("click", function (e) {
                if (e.target === modalRef.current) setIsOpenModal(false);
            });
        };
    }, [modalRef]);

    return (
        <Container ref={modalRef}>
            <ModalWrap>
                <Content>{contents}</Content>
                <ButtonWrap>
                    {handleClickSubmitButton && (
                        <Button isSubmit={true} onClick={() => handleClickSubmitButton()}>
                            확인
                        </Button>
                    )}
                    <Button onClick={() => setIsOpenModal(false)}>닫기</Button>
                </ButtonWrap>
            </ModalWrap>
        </Container>
    );
};

export default Modal;
