import React from 'react'
// import { Profile } from '../../theme/Resuable/CardComponents'
import { Card } from '@mui/material'
import styled from 'styled-components';
import Grid from '@mui/material/Grid'

function ProfileCards() {
  return (
    <Profile item component={Card} xs={12} md={2.8}>ProfileCards</Profile>
  )
}

export default ProfileCards

const Profile = styled(Grid)(({ theme }) => ({
  padding: "10px",
}));