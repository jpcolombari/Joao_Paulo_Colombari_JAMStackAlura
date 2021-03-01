import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const FooterWrapper = styled.footer`
    li {
        padding: 0 16px 16px;
    }
`;

FooterWrapper.FooterIcon = styled.img`
    fill: ${({ theme }) => theme.colors.primary.main.color};
`;

export default FooterWrapper;
