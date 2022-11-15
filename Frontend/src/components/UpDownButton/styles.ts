import styled from "styled-components";

export const UpDownButtonWrapper = styled.div`
    display: flex;
    grid-area: updown-button;
    width: clamp(40px, 60px, 80px);
    height: clamp(40px, 60px, 80px);
    background-color: var(--color-blue-primary);
    border-radius: var(--border-radius-general);
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-items: center;
`;
