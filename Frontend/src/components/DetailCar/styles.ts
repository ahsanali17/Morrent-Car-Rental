import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 2rem;
  margin:40px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
export const InnerDiv = styled.section`
  width:50%;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CarDetailImages = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin: 10px 0;

  div{
    width: 180px;
    height: 145px;
    border: 2px solid #3563E9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 90%;
    height: auto;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;