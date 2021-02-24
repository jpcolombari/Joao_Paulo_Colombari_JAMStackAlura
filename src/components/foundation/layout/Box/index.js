import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
    ${propToStyle('flex')}
    ${propToStyle('display')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexDirection')}
`;

export default Box;
