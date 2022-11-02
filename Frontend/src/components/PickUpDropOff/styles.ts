import styled from 'styled-components';

export const PickUpDropOffWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 4.2% 1fr;
  grid-template-areas: 
    'pickup updown-button dropoff'
  ;
  gap: 0 var(--spacing-1);

  width: 100%;
  padding: 0 var(--spacing-2);
  border-radius: var(--border-radius-general);
`;