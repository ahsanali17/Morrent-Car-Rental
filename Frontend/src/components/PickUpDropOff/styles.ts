import styled from "styled-components";

export const PickUpDropOffWrapper = styled.section`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
`;

// export const PickUpDropOffWrapper = styled.section`
//   width: 100%;
//   margin-top: 3rem;
//   margin-bottom: 3rem;
//   margin-left: auto;
//   margin-right: auto;
// `;

export const PickUpDropContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
  gap: 1rem;
  justify-content: space-between;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    padding-left: 2.3rem;
    padding-right: 2.3rem;
  }
  @media (min-width: 1024px) {
  }
`;

// export const PickUpDropContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 4.2% 1fr;
//   grid-template-areas:
//     'pickup updown-button dropoff'
//   ;
//   gap: 0 var(--spacing-veritical);
//   width: 100%;
//   /* padding: 0 var(--spacing-horizontal); */
//   border-radius: var(--border-radius-general);
//   padding-left: 1rem;
//   padding-right: 1rem;
//   @media (min-width: 640px) {
//   }
//   @media (min-width: 768px) {
//     padding-left: 3.3rem;
//     padding-right: 3.3rem;
//   }
//   @media (min-width: 1024px) {
//   }
// `;

// export const PickUpDropOffWrapper = styled.section`
//   display: grid;
//   grid-template-columns: 1fr 4.2% 1fr;
//   grid-template-areas:
//     'pickup updown-button dropoff'
//   ;
//   gap: 0 var(--spacing-veritical);

//   width: 100%;
//   padding: 0 var(--spacing-horizontal);
//   border-radius: var(--border-radius-general);
// `;
