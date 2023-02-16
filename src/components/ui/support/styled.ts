import styled from 'styled-components';

interface displayProps {
  display?: 'block' | 'none';
}

export const StyledSupportModal = styled.div<displayProps>`
  display: ${({ display = 'none' }) => display};
  position: absolute;
  width: 238px;
  height: 111px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  padding: 6px 0;
  border-radius: 4px;
  outline: 1px solid transparent;
  background: #fff;
  top: 48px;
  z-index: 2;
  right: 40px;
`;

export const StyledSUpportInnerHR = styled.hr`
  margin: 7px 0;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
`;

export const StyledSupportInnerDiv = styled.div`
  height: 32px;
  padding: 6px 30px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.2px;
  line-height: 20px;
  box-sizing: border-box;
`;

export const StyledSupportInnerA = styled.a`
  text-decoration: none;
  color: #202124;
  box-sizing: border-box;
`;
