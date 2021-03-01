import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const CardBase = styled.a`
    width: 100%;
    display: flex;
    ${propToStyle('flexDirection')};
    ${propToStyle('marginBottom')};
    ${propToStyle('textAlign')};
`;

CardBase.CardTitle = styled.h2`
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
`;

CardBase.CardImage = styled.img`
    max-width: 100%;
`;

CardBase.CardText = styled.span`
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
    ${propToStyle('display')};
`;

CardBase.CardDestaque = styled.a`
    width: 100%;
    display: flex;
    ${propToStyle('flexDirection')};
    ${propToStyle('marginBottom')};
    ${propToStyle('textAlign')};
`;

export default CardBase;
