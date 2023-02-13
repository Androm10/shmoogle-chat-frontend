import {
  StyledSupportOutter,
  StyledSupportModal,
  StyledSupportInnerDiv,
  StyledSupportInnerA,
  StyledSUpportInnerHR,
} from './styled';

interface SMproprs {
  isHidden: boolean;
  setHidden(value: boolean): void;
  leftCord: number;
}

export default function SupportModal(props: SMproprs) {
  return (
    <StyledSupportOutter
      display={props.isHidden ? 'none' : 'block'}
      onClick={() => {
        props.setHidden(true);
      }}
    >
      <StyledSupportModal
        left={props.leftCord}
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
    </StyledSupportOutter>
  );
}
