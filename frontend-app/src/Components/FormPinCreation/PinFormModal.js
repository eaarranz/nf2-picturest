import React, { useState } from "react";
import { Box, Heading, Layer, Modal, Spinner } from "gestalt";
import PinForm from "./PinForm";
import CreationButton from "../CreationButton/CreationButton";

const PinFormModal = (props) => {
  const [boards, setBoards] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const fetchBoards = () => {
    fetch("http://localhost/api/boards")
      .then((response) => response.json())
      .then((response) => {
        setBoards(response);
        setIsFetching(false);
      });
  };

  if (isFetching) {
    fetchBoards();
  }

  return (
    <Layer>
      <Modal
        accessibilityModalLabel="View default padding and styling"
        heading="Add a pin"
        onDismiss={() => {
          props.setShowPinFormModal(false);
        }}
        size="sm"
      >
        <Spinner show={isFetching} accessibilityLabel="fetchingBoards" />
        {!isFetching && <PinForm boards={boards} />}
      </Modal>
    </Layer>
  );
};

export default PinFormModal;
