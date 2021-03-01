import React from 'react';
import styled from 'styled-components';

const LogoBase = styled.a`
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  font-size: ${({ theme }) => theme.typographyVariants.paragraph.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph.lineHeight};
`;

export default function Logo() {
  return (
    <LogoBase>
      {'<João Paulo />'}
    </LogoBase>
  );
}
