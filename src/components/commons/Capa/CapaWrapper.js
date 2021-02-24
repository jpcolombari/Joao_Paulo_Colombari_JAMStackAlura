import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const CapaWrapper = styled.div`
    width: 100%;
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundSize')}
    ${propToStyle('height')}
`;

CapaWrapper.Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;

export default CapaWrapper;
