import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const CapaWrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary.main.color};
    display: flex;
    justify-content: center;
    align-items: center;
    ${propToStyle('height')}
`;

CapaWrapper.CapaIcon = styled.img`
    ${propToStyle('width')}
`;

export default CapaWrapper;
