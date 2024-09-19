import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

const Navbar = () => {
  return (
    <div>
    <Stack direction="row" marginRight="50px" marginBottom="100px" >
    <Link> LOGO </Link>
    <Stack direction="row" justifyContent="space-around">
      
      <a href='#exercies'>Exercise</a>
      <Link to="/">About</Link>

    </Stack>

    </Stack>
    Navbar</div>

  )
}

export default Navbar