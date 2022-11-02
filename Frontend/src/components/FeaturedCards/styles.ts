import styled from "styled-components";

export const FeaturedHorizontal = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FeaturedCardsWrapper = styled.div`
  display: grid;
  position: relative;
  z-index: 5;
  flex: 0 0 auto;
  min-width: 51rem;
  width: 100%;
  height: fit-content;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  gap: 0 var(--spacing-1);
  padding: 2.25% 3.5%;
`;

export const SearchSettings = styled.div`

display: flex;
    max-height: 64px;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  @media (min-width: 768px) {
    display:none ;
  }
`;

export const SearchSettingsContainer = styled.div`
  position: relative;
  display: flex;
`;


export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid rgba(195, 212, 233, 0.4);
  border-radius: 10px;
  display: flex;
  min-width: 270px;
  padding-left: 3rem;
  ::placeholder {
    color: #3d5278;
  }
`;
