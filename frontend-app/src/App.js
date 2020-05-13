import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import 'gestalt/dist/gestalt.css';
import {Box, IconButton, Masonry, Spinner} from "gestalt";
import Pin from "./Components/Pin/Pin";
import FormModal from "./Components/FormPinCreation/FormModal";

function App() {
    const [pins, setPins] = useState();
    const [isFetching, setIsFetching] = useState(true);
    const [showModal, setShowModal] = React.useState(false);

    const fetchPins = () => {
        fetch('http://localhost/api/pins')
            .then(response => response.json())
            .then(response => {
                setPins(response)
                setIsFetching(false)
            })
    }

    if (isFetching) {
        fetchPins();
    }

    console.log(pins)

    return (
        <div className="App">
            <Header />
            {!isFetching
                ? <Masonry comp={Pin} items={pins} />
                : <Spinner show={isFetching} accessibilityLabel="loadingPins" />
            }
            <Box margin={4} position="absolute" right bottom>
                <IconButton size="xl" accessibilityLabel="add" icon="add" bgColor="lightGray" onClick={() => setShowModal(true)}/>
            </Box>
            {showModal && <FormModal setShowModal={setShowModal}/>}
        </div>
    );
}

export default App;
