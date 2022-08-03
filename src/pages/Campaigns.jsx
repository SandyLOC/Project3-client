import React from 'react';
import Card from '../components/Card/Card';
import { Box, Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import {useState, useEffect } from 'react';


function Campaigns(props) {

  const [campaigns, setCampaign] = useState([])

  const { user } = props

  useEffect(() => {
  //Connect to the server
  fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns`)
  .then(data => data.json())
  .then(campaign => {
    setCampaign(campaign)
  })
  .catch(console.log)

}, [])

  return (
    <Grid spacing={3} mt={1}>
      <Typography variant="h2" mt={2} mb={4}>Campaigns</Typography>
        
        <Grid container spacing={2}>
          
        {campaigns.map(campaign => {
        return(
          <Grid item xs={4} sm={4}>
            <Card key={campaign._id} campaign={campaign} user={user} />
          </Grid>
        )
      })}

    </Grid>

      </Grid>


  )
}

export default Campaigns
