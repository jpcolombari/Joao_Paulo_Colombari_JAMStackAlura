import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import FooterWrapper from './styles/FooterWrapper';

export default function Footer() {
  const links = [
    {
      url: 'https://github.com/jpcolombari',
      image: '/images/github.svg',
    },
    {
      url: 'https://www.linkedin.com/in/jpcolombari/',
      image: '/images/linkedin.svg',
    },
  ];

  return (
    <FooterWrapper>
      <Grid.Container display="flex" justifyContent="center">
        {links.map((link) => (
          <li key={link.url} padding="32px">
            <Text tag="a" href={link.url}>
              <FooterWrapper.FooterIcon src={link.image} alt="Imagem link footer" />
            </Text>
          </li>
        ))}
      </Grid.Container>
    </FooterWrapper>
  );
}
