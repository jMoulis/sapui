import styled from '@emotion/styled';

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.shell.shell1};
  padding: 1rem;
  & > * {
    color: ${({ theme }) => theme.colors.action.secondary};
  }
`;

export default Footer;
