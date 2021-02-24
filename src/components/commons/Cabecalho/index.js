import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Logo from '../Logo';
import NavBar from '../NavBar';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  ${propToStyle('padding')}

`;

export default function Cabecalho() {
  return (
    <Header
      padding={{
        xs: '0 28px',
        md: '0 32px',
      }}
    >
      <Logo />
      <NavBar />
    </Header>
  );
}
