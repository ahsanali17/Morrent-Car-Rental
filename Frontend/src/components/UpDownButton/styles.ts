import styled from 'styled-components';

export const UpDownButtonWrapper = styled.div`
  grid-area: updown-button;

  height: clamp(40px, 60px, 80px);
  width: clamp(40px, 60px, 80px);
  background-color: var(--color-blue-primary);
  border-radius: var(--border-radius-general);
  align-self: center;
  justify-self: center;
`;