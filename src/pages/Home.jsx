import React from 'react'

import PostCard from './PostCard'
import { Container, Grid } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      
      <Container maxW="container.xl">
        <Grid gap={4} templateColumns='repeat(auto-fit,minmax(320px, 1fr))'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

        </Grid>
      </Container>

      
    </div>
  )
}

export default Home
