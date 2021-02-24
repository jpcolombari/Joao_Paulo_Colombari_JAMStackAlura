import React from 'react';
import Card from '../Card';
import SectionTitle from '../commons/SectionTitle';
import Grid from '../foundation/layout/Grid';

export default function WrapperProjetos() {
  return (
    <Grid.Container>
      <SectionTitle />
      <Grid.Row>
        <Card />
      </Grid.Row>
    </Grid.Container>
  );
}
