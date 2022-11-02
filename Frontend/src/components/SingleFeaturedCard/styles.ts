import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  height: clamp(232px, 360px, 500px);
  width: 100%;
  min-width: 327px;
  border-radius: var(--border-radius-general);
  position: relative;
  z-index: 10;
  justify-self: center;
  :nth-of-type(1) {
    background-color: var(--color-blue-secondary);
  }
  :nth-of-type(2) {
    background-color: var(--color-blue-primary);
  }
`;

export const FeaturedContent = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  width: 50%;
  }
  @media (min-width: 1024px) {
  }
`;

export const FeaturedContentTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #FFFFFF;
`;

export const FeaturedContentDesc = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

export const FeaturedContentImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0%;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  left: 50%;
  }
  @media (min-width: 1024px) {
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  width: inherit;
  }
  @media (min-width: 1024px) {
  }
`;
