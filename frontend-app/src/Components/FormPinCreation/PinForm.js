import React from "react"
import {Box, Button, SelectList, TextArea, TextField} from "gestalt";
import Pin from "../Pin/Pin";

const PinForm = (props) => {
    //Formulario
    const initialState = {
        name: "",
        description: "",
        img_url: "",
        board_id: "1",
        errorMessage: undefined
    };

    const [data, setData] = React.useState(initialState);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [created, setCreated] = React.useState(undefined);

    const handleInputChange = event => {
        console.log(event)
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const boardsSelectable = props.boards.map(board => ({value: `${board.id}`, label: board.name}))

    const handleFormSubmit = () => {
        setIsSubmitting(true)
        fetch("http://localhost/api/pins", {
            method: "post",
            mode: "cors",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => {
            if (res.ok) {
                return res.json()
            } throw res
        }).then(resJson => {
            setCreated(resJson)
            setIsSubmitting(false)
        })
    }

    return (
        <Box paddingX={8} marginBottom={8}>
            <form>
                <SelectList
                    id="board_id"
                    name="board_id"
                    onChange={({event}) => handleInputChange(event)}
                    options={boardsSelectable} label="Board"
                    value={data.board_id}
                />
                <TextField
                    id="name"
                    name="name"
                    onChange={({event}) => handleInputChange(event)}
                    placeholder="Add a name to the pin"
                    label="Name"
                    value={data.name}
                    type="text"
                />
                <TextField
                    id="img_url"
                    name="img_url"
                    onChange={({event}) => handleInputChange(event)}
                    placeholder="Add the image url"
                    label="Image"
                    value={data.img_url}
                    type="url"
                />
                <TextArea
                    id="description"
                    name="description"
                    onChange={({event}) => handleInputChange(event)}
                    placeholder="Add the description of the pin"
                    label="Description"
                    value={data.description}
                />
            </form>
            <Box marginTop={4}>
                <Button text="Submit" color="red" disabled={isSubmitting} onClick={() => handleFormSubmit()}/>
            </Box>
            {created !== undefined ? <Pin data={{name: created.name, img_url: created.img_url}}/> : null}
        </Box>
    )
}

export default PinForm