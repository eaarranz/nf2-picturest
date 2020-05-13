import React from 'react';
import {Box, Avatar, Button, Icon, Text, SearchField, IconButton} from "gestalt";

const Header = () => {
    const [value, setValue] = React.useState('');
    return (<Box
        alignItems="center"
        direction="row"
        display="flex"
        paddingY={3}
    >
        <Box paddingX={3}>
            <Icon size={24} accessibilityLabel="icon" color="red" icon="pinterest"/>
        </Box>
        <Box paddingX={2}>
            <Button color="white" text="Home" inline/>
            <Button color="white" selected text="Following" inline/>
        </Box>
        <Box flex="grow" paddingX={2}>
            <SearchField
                accessibilityLabel="Demo Search Field"
                id="searchField"
                onChange={({value}) => setValue(value)}
                placeholder="Search and explore"
                value={value}
                size="lg"
            />
        </Box>
        <Box paddingX={2}>
            <IconButton
                accessibilityLabel="Notifications"
                icon="speech-ellipsis"
                size="md"
            />
        </Box>
        <Box paddingX={2}>
            <IconButton accessibilityLabel="Profile" icon="person" size="md"/>
        </Box>
    </Box>)
}

export default Header;