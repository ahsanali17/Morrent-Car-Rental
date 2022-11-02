import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 8.62%;

  background-color: var(--color-white);

  h1 {
    color: var(--color-blue-primary);
  }
`;

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1536px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 100%;
  justify-content: space-between;
  @media (min-width: 640px) {
    padding-left: 2.9rem;
    padding-right: 2.9rem;
  }
  @media (min-width: 1024px) {
    /* padding-left: 1rem;
    padding-right: 1rem; */
  }
`;
export const NavContainer = styled.div`
  display: flex;
  margin: auto 60px;
  max-width: 1280px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto 15px;
  }
`;
export const LogoContainer = styled.div`
  /* display: flex;
  flex: 1 1 0%;
  justify-content: flex-start;
  justify-items: center;
  @media (max-width: 768px) {    
    padding-left: 41px;
    transform: scale(.8);
  } */
`;
export const NavIcon = styled.svg`
  cursor: pointer;
  margin: 0 5px;
  @media (max-width: 768px) {
    margin: 0 2px;
  }
`;
export const NavItems = styled.div`
  /* display: flex;
  gap: 1.25rem;
  justify-content: flex-end;
  justify-items: center;
  @media (max-width: 768px) {
     padding-right: 41px;
    transform: scale(.8);
  } */
`;
