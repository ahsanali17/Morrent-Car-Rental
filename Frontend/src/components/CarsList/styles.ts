import styled from 'styled-components';

export const CarsListWrapper = styled.section`
  display: grid;
  gap: 30px;
  place-content: center;

  grid-template-columns: repeat(auto-fill, 400px);
  width: 100%;
  padding: var(--spacing-1) 0;
`;
