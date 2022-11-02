import styled from 'styled-components';

export const FeaturedWrapper = styled.div`
  height: clamp(232px, 360px, 500px);
  width: 100%;
  min-width: 327px;
  border-radius: var(--border-radius-general);

  justify-self: center;

  :nth-of-type(1) {
    background-color: var(--color-blue-secondary);
  }

  :nth-of-type(2) {
    background-color: var(--color-blue-primary);
  }
`;