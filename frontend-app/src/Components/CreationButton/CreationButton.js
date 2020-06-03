import React from "react";
import { Box, Button, Flyout, IconButton, Layer } from "gestalt";
import PinFormModal from "../FormPinCreation/PinFormModal";
import BoardFormModal from "../FormBoardCreation/BoardFormModal";

const CreationButton = () => {
  const [showPinFormModal, setShowPinFormModal] = React.useState(false);
  const [showBoardFormModal, setShowBoardFormModal] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef();

  return (
    <>
      <Box margin={4} position="absolute" right bottom ref={anchorRef}>
        <IconButton
          size="xl"
          accessibilityLabel="add"
          icon="add"
          bgColor="lightGray"
          onClick={() => setOpen(true)}
        />
      </Box>
      {open && (
        <Layer>
          <Flyout
            anchor={anchorRef.current}
            idealDirection="left"
            onDismiss={() => setOpen(false)}
            positionRelativeToAnchor={false}
            size="md"
          >
            <Box
              padding={3}
              display="flex"
              alignItems="center"
              direction="column"
              column={12}
            >
              <Button
                accessibilityExpanded={!!open}
                accessibilityHaspopup
                color="white"
                iconEnd="arrow-down"
                inline
                onClick={() => setShowBoardFormModal(true)}
                text="Create board"
              />
              <Button
                accessibilityExpanded={!!open}
                accessibilityHaspopup
                color="white"
                icon="pin"
                inline
                onClick={() => setShowPinFormModal(true)}
                text="Create pin"
              />
            </Box>
          </Flyout>
        </Layer>
      )}
      {showPinFormModal && (
        <PinFormModal setShowPinFormModal={setShowPinFormModal} />
      )}
      {showBoardFormModal && (
        <BoardFormModal setShowBoardFormModal={setShowBoardFormModal} />
      )}
    </>
  );
};

export default CreationButton;
