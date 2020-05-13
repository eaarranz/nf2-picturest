import React from "react"
import {Box, Card, Mask, Text} from "gestalt";

const Pin = ({data}) => {
    return (
        <Box maxWidth={236} padding={2} column={12}>
            <Card image={<Mask rounding={2} wash>
                <img
                    alt={data.name}
                    src={data.img_url}
                    style={{ maxWidth: '100%', display: 'block' }}
                />
            </Mask>}>
                <Text align="center" weight="bold">
                    <Box paddingX={3} paddingY={2}>
                        {data.name}
                    </Box>
                </Text>
            </Card>
        </Box>
    )
}

export default Pin;