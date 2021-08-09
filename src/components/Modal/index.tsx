import React, { useRef, useEffect } from "react";
import { Container, ModalWrap, Content, Title, Input, ErrorMsg, ButtonWrap, Button } from "./styled";

const Modal = ({
    title,
    inputRef,
    contents,
    isErrorMsg,
    errorMsg,
    handleClickSubmitButton,
    handleClickCloseButton,
}: {
    title?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    contents?: JSX.Element;
    isErrorMsg?: boolean;
    errorMsg?: string;
    handleClickSubmitButton?: () => void;
    handleClickCloseButton: () => void;
}) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (!modalRef.current) return;
        document.addEventListener("click", function ({ target }) {
            if (target === modalRef.current) handleClickCloseButton();
        });
        return () => {
            document.removeEventListener("click", function ({ target }) {
                if (target === modalRef.current) handleClickCloseButton();
            });
        };
    }, [modalRef]);

    return (
        <Container ref={modalRef}>
            <ModalWrap>
                <Content>
                    {title && <Title>{title}</Title>}
                    {inputRef && <Input ref={inputRef} />}
                    {contents && contents}
                    {isErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </Content>
                <ButtonWrap>
                    {handleClickSubmitButton && (
                        <Button isSubmit={true} onClick={handleClickSubmitButton}>
                            확인
                        </Button>
                    )}
                    <Button onClick={handleClickCloseButton}>닫기</Button>
                </ButtonWrap>
            </ModalWrap>
        </Container>
    );
};

export default Modal;