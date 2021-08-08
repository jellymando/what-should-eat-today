import styled from "styled-components";
import { Container as KewordContainer } from "components/KeywordBox/styled";

export const Container = styled.div`
    position: relative;
    display: flex;
    height: calc(100% - 110px);
    flex-direction: column;

    ${KewordContainer} {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 8px 8px 0;
        background: rgba(255, 255, 255, 0.8);
    }
`;
