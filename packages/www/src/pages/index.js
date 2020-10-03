import React from 'react'
import { Button, Container, Flex, Heading } from 'theme-ui'
export default props=>(
    <Container>
        <Flex sx={{flexDirection: "column", margin: 3}}>
        <Heading as="h1">Get Stuff don</Heading>
        <Button sx={{marginTop: 2}} onClick={() => {
            alert('clicked')
        }}>Log In</Button>
        </Flex>
    </Container>
)