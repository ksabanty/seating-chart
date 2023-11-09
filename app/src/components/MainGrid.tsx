import React from 'react'
import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import InputForm from './InputForm';
import GroupDisplay from './GroupDisplay';

const PRIMARY_COL_HEIGHT = rem(500);

const MainGrid = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  
  return (
    <div>
    <Container fluid my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <InputForm />
        <Grid gutter="md">
          <Grid.Col>
            <GroupDisplay />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
    </div>
  )
}

export default MainGrid
