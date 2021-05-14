import * as React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Text = styled(Typography)`
  color: tomato;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(137.81deg, #e7a28f 3.52%, #f9d6ac 41.89%, #fbfefc 96.77%);

  // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
  -webkit-box-decoration-break: clone;
`

const IndexPage = () => {
  return (
    <>
      <Container maxWidth={'lg'} fixed={true}  >

        <Text  variant={'h1'}  > Things start to make sense </Text>

      </Container>
    </>
  )
}

export default IndexPage
