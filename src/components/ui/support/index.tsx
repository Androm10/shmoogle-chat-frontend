import { StyledSupportModal, StyledSupportInnerDiv, StyledSupportInnerA, StyledSUpportInnerHR } from './styled';

interface SMproprs {
  isHidden: boolean;
}

export default function SupportModal(props: SMproprs) {
  return (
    // <StyledSupportOutter
    //   display={props.isHidden ? 'none' : 'block'}
    //   onClick={() => {
    //     props.setHidden(true);
    //   }}
    // >
    <StyledSupportModal
      display={props.isHidden ? 'none' : 'block'}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <StyledSupportInnerDiv>
        <StyledSupportInnerA href="">Справка</StyledSupportInnerA>
      </StyledSupportInnerDiv>
      <StyledSupportInnerDiv>
        <StyledSupportInnerA href="">Обучение</StyledSupportInnerA>
      </StyledSupportInnerDiv>
      <StyledSUpportInnerHR />
      <StyledSupportInnerDiv>
        <StyledSupportInnerA href="">Отправить отзыв в Google</StyledSupportInnerA>
      </StyledSupportInnerDiv>
    </StyledSupportModal>
    // </StyledSupportOutter>
  );
}
