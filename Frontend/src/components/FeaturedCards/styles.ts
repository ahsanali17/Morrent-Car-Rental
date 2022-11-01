import styled from "styled-components";

export const FeaturedCardsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  gap: 0 var(--spacing-1);

  height: fit-content;
  width: 100%;
  padding: var(--spacing-1) var(--spacing-2);
`;