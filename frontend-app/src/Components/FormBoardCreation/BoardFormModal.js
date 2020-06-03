import React, { useState } from "react";
import { Box, Heading, Layer, Modal, Spinner } from "gestalt";
import BoardForm from "./BoardForm";
import CreationButton from "../CreationButton/CreationButton";

const BoardFormModal = (props) => {
  return (
    <Layer>
      <Modal
        accessibilityModalLabel="View default padding and styling"
        heading="Add a board"
        onDismiss={() => {
          props.setShowBoardFormModal(false);
        }}
        size="sm"
      >
        <BoardForm />
      </Modal>
    </Layer>
  );
};

export default BoardFormModal;
