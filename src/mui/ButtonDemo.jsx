import React from 'react'
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

export const ButtonDemo = () => {

  return (
    <div style={{textAlign:"center"}}>
        <h1>ButtonDemo</h1>
        <Button variant='text'>DEMO</Button>
        <Button variant='contained' size='small'>DEMO</Button>
        <Button variant='outlined' color='error'>DEMO</Button>
        <Button sx={{height:50,width:50,backgroundColor:"black",color:"white"}}>DEMO</Button>
        <Button variant='outlined' color='primary' startIcon={<SendIcon/>}>SEND</Button>
        <Button variant='outlined' color='primary' endIcon={<SendIcon/>}>SEND</Button>
        <IconButton>
            <SendIcon/>
        </IconButton>
        <Fab sx={{backgroundColor:"yellow"}}>
            <SendIcon/>
        </Fab>
        <Box sx={{height:"400px",width:"400px",backgroundColor:"red"}}>

        </Box>
    </div>
  )
}
