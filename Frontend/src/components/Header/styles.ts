import styled from "styled-components";

export const HeaderWrapper = styled.header`
  --padding-top-bottom: 4.169%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8.62%;

  padding: 0 var(--spacing-horizontal);
  background-color: var(--color-white);

  h1 {
    font-size: 2rem;
    font-weight: var(--font-weight-heavy);
    line-height: 120%;
    letter-spacing: 1px;
    color: var(--color-blue-primary);
  }


  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    padding: 0 var(--small-spacing-horizontal);
   }
`;

export const HeaderFeaturesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: var(--padding-top-bottom) 0;
`;

