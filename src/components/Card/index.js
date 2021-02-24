import React from 'react';
import Grid from '../foundation/layout/Grid';
import CardBase from './styles/CardBase';

export default function Card() {
  return (
    <Grid.Col>
      <CardBase>
        <CardBase.CardImage src="/images/magento-capa.jpg" alt="Imagem do projeto" />
        <CardBase.CardTitle>
          TITULO
        </CardBase.CardTitle>
      </CardBase>
    </Grid.Col>
  );
}
