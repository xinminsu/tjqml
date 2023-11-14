import React from 'react'
import Head from 'next/head'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '../components/Link'
import Root from '../components/Root'
import Nav from "../components/Nav";


export default function NextPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-material-ui)</title>
      </Head>
      <Nav/>
      <Root>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          with Nextron
        </Typography>
        <Typography gutterBottom>
          <Link href="/home">Go to the home page</Link>
        </Typography>
        <Button variant="contained" color="primary">
          Do nothing button
        </Button>
      </Root>
    </React.Fragment>
  )
}
