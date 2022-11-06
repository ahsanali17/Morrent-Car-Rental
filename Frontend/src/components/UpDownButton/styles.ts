import styled from "styled-components";

export const UpDownButtonWrapper = styled.div`
  display: none;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    display: flex;
    width:9%;
    /* width: clamp(40px, 60px, 80px); */
    grid-area: updown-button;
    height: clamp(40px, 60px, 80px);
    background-color: var(--color-blue-primary);
    border-radius: var(--border-radius-general);
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-items: center;
    /* width: clamp(25px, 0px, 20px); */
  }
  @media (min-width: 1024px) {
  }
`;
