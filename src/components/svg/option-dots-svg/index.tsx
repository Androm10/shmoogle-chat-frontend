import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const OptionDotsSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;

  return (
    <StyledSvg width="20" height="20" viewBox="0 0 24 24" fill={fill}>
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </StyledSvg>
  );
});

OptionDotsSvg.displayName = 'OptionDotsSvg';

export default OptionDotsSvg;
