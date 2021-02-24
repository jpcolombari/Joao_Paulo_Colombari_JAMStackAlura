/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  title: css`
        font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
        color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
    `,
  paragraph: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph.lineHeight};
        color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
    `,
};

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]};

    ${propToStyle('textAlign')}
    ${propToStyle('marginBottom')}
    ${propToStyle('margin')}
    ${propToStyle('textTransform')}

`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
};
