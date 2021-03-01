import React from 'react';
import Grid from '../foundation/layout/Grid';
import CardBase from './styles/CardBase';

const projects = [
  {
    name: 'Instalura Base',
    url: 'https://instalura-base-jpcolombari.vercel.app/',
    image: '/images/instalura.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    feature: true,
  },
  {
    name: 'Projeto 2',
    url: '/projeto2',
    image: '/images/magento-capa.jpg',
  },
  {
    name: 'Projeto 3',
    url: '/projeto3',
    image: '/images/magento-capa.jpg',
  },
  {
    name: 'Projeto 4',
    url: '/projeto4',
    image: '/images/magento-capa.jpg',
  },
];

export default function Card() {
  return (
    <Grid.Row>
      {projects.map((project) => {
        if (project.feature) {
          return (
            <Grid.Col
              key={project.url}
              value={12}
              feature={project.feature}
            >
              <CardBase.CardDestaque href={project.url} target="_blank" flexDirection={{ xs: 'column', md: 'row' }} marginBottom="32px" textAlign={{ xs: 'center', md: 'left' }}>
                <Grid.Row>
                  <Grid.Col value={{ xs: 12, md: 6 }}>
                    <CardBase.CardImage src={project.image} alt="Imagem do projeto" />
                  </Grid.Col>
                  <Grid.Col value={{ xs: 12, md: 6 }}>
                    <CardBase.CardTitle>
                      {project.name}
                    </CardBase.CardTitle>
                    <CardBase.CardText display={{ xs: 'none', md: 'block' }}>
                      {project.description}
                    </CardBase.CardText>
                  </Grid.Col>
                </Grid.Row>
              </CardBase.CardDestaque>
            </Grid.Col>
          );
        }
        return (
          <Grid.Col
            key={project.url}
            value={{ xs: 12, md: 4 }}
            feature={project.feature}
          >
            <CardBase href={project.url} flexDirection="column" marginBottom="32px" textAlign="center">
              <CardBase.CardImage src={project.image} alt="Imagem do projeto" />
              <CardBase.CardTitle>
                {project.name}
              </CardBase.CardTitle>
            </CardBase>
          </Grid.Col>
        );
      })}
    </Grid.Row>
  );
}
