import React, { useRef, useEffect } from "react";
import { Container, ModalWrap, Content, Title, Input, ErrorMsg, ButtonWrap, Button } from "./styled";

const Modal = ({
    title,
    inputRef,
    contents,
    isErrorMsg,
    errorMsg,
    onClickCloseButton,
    onClickSubmitButton,
}: {
    title?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    contents?: JSX.Element;
    isErrorMsg?: boolean;
    errorMsg?: string;
    onClickCloseButton: () => void;
    onClickSubmitButton?: () => void;
}) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (!modalRef.current) return;
        document.addEventListener("click", function ({ target }) {
            if (target === modalRef.current) onClickCloseButton();
        });
        return () => {
            document.removeEventListener("click", function ({ target }) {
                if (target === modalRef.current) onClickCloseButton();
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
                    {onClickSubmitButton && (
                        <Button isSubmit={true} onClick={onClickSubmitButton}>
                            확인
                        </Button>
                    )}
                    <Button onClick={onClickCloseButton}>닫기</Button>
                </ButtonWrap>
            </ModalWrap>
        </Container>
    );
};

export default Modal;
