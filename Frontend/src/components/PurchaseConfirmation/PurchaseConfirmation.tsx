import { StyledModal, Box, Confirmation, ButtonsContainer, Button } from "./styles";
import { useModalContext } from "../../contexts/ModalContext";

const PurchaseConfirmation = () => {
  const { isOpen, toggleModal } = useModalContext();

  return (
    <StyledModal isOpen={isOpen} onEscapeKeydown={toggleModal} onBackgroundClick={toggleModal} aria-modal={true} aria-labelledby="modal-label">
      <Box>
        <Confirmation>Confirmation</Confirmation>
        <ButtonsContainer>
          <Button proceed={true}>Procceed</Button>
          <Button proceed={false} onClick={toggleModal}>Cancel</Button>
        </ButtonsContainer>
      </Box>
    </StyledModal>
  )
}

export default PurchaseConfirmation