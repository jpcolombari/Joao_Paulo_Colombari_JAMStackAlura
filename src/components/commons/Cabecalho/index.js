import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Grid from '../../foundation/layout/Grid';
import Logo from '../Logo';
import NavBar from '../NavBar';

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  ${propToStyle('padding')};
`;

export default function Cabecalho() {
  return (
    <Grid.Container>
      <Header padding={{ xs: '12px 0' }}>
        <Logo />
        <NavBar />
      </Header>
    </Grid.Container>
  );
}
