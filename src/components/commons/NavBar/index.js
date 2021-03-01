import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 166px;

    li {
        list-style: none;
    }

    a {
      color: ${({ theme }) => theme.colors.secondary.main.contrastText};
    }
`;

export default function NavBar() {
  const links = [
    {
      texto: 'Sobre Mim',
      url: '/sobre-min',
    },
    {
      texto: 'Contato',
      url: '/contato',
    },
  ];
  return (
    <NavWrapper>
      {links.map((link) => (
        <li key={link.url}>
          <Text variant="paragraph" tag="a" href={link.url}>
            {link.texto}
          </Text>
        </li>
      ))}
    </NavWrapper>
  );
}
