import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const OfflineSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;
  return (
    <StyledSvg width="12px" height="12px" viewBox="0 0 8 8" fill={fill}>
      <g fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M4 6.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5zM4 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
        ></path>
      </g>
    </StyledSvg>
  );
});

OfflineSvg.displayName = 'OfflineSvg';

export default OfflineSvg;
