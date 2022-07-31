import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function NewCampaign() {
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      return({
        username: data.get('username'),
        password: data.get('password'),
      });
    };
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
      <Avatar color="primary" sx={{ m: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create New Campaign
      </Typography>
      <Box component="form" onSubmit={() => handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="user"
          label="Username"
          name="user"
          autoComplete="user"
          
          autoFocus
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          
          sx={{ mt: 3, mb: 2}}
        >
          Create
        </Button>

      </Box>
    </Box>

  </Container>
  )
}

export default NewCampaign