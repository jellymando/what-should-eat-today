import React, { useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "store/atom";
import { Container, ModalWrap, Content, Title, Input, ErrorMsg, ButtonWrap, Button } from "./styled";

const Modal = ({ title, inputRef, isErrorMsg, errorMsg, handleClickSubmitButton }) => {
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
                <Content>
                    {title && <Title>{title}</Title>}
                    {inputRef && <Input ref={inputRef} />}
                    {isErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </Content>
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
