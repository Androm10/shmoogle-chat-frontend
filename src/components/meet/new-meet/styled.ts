import styled from 'styled-components';

export const StyledNewMeet = styled.div`
  background: ${({ theme }) => theme.block.background};
  border-radius: 10px;
  padding: 20px;
  overflow: visible;
`;

export const NewMeetTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
`;

export const NewMeetInfo = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const NewMeetInputContainer = styled.div`
  height: 40px;
  width: 500px;
`;

export const NewMeetText = styled.p`
  color: ${({ theme }) => theme.text.secondaryColor};
`;

export const NewMeetButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 30px;
  padding-top: 20px;
  gap: 15px;
  box-shadow: inset 0 2px 0 ${({ theme }) => theme.block.shadowColor};
`;
