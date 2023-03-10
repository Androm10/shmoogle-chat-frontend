import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const VideoOffSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill, size } = props;
  return (
    <StyledSvg fill={fill} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" focusable="false">
      <path d="M18 10.48V6c0-1.1-.9-2-2-2H6.83l2 2H16v7.17l2 2v-1.65l4 3.98v-11l-4 3.98zM16 16L6 6 4 4 2.81 2.81 1.39 4.22l.85.85C2.09 5.35 2 5.66 2 6v12c0 1.1.9 2 2 2h12c.34 0 .65-.09.93-.24l2.85 2.85 1.41-1.41L18 18l-2-2zM4 18V6.83L15.17 18H4z"></path>
    </StyledSvg>
  );
});

VideoOffSvg.displayName = 'VideoOffSvg';

export default VideoOffSvg;
