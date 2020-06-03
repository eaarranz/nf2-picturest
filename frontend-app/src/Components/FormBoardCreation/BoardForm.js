import React from "react";
import { Box, Button, SelectList, TextArea, TextField } from "gestalt";
import Pin from "../Pin/Pin";

const BoardForm = (props) => {
  //Formulario
  const initialState = {
    name: "",
    description: "",
    img_url: "",
    board_id: "1",
    errorMessage: undefined,
  };

  const [data, setData] = React.useState(initialState);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    setIsSubmitting(true);
    fetch("http://localhost/api/boards", {
      method: "post",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        setIsSubmitting(false);
      });
  };

  return (
    <Box paddingX={8} marginBottom={8}>
      <form>
        <TextField
          id="name"
          name="name"
          onChange={({ event }) => handleInputChange(event)}
          placeholder="Add a name to the pin"
          label="Name"
          value={data.name}
          type="text"
        />
      </form>
      <Box marginTop={4}>
        <Button
          text="Submit"
          color="red"
          disabled={isSubmitting}
          onClick={() => handleFormSubmit()}
        />
      </Box>
    </Box>
  );
};

export default BoardForm;
