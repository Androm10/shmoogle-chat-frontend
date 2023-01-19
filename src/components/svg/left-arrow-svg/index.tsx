import { SvgProps } from 'core/types/svg-props';
import { FC, memo } from 'react';

const LeftArrowSvg: FC<SvgProps> = memo((props: SvgProps) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      <path fill="none" d="M0 0h24v24H0z"></path>
    </svg>
  );
});

LeftArrowSvg.displayName = 'LeftArrowSvg';

export default LeftArrowSvg;
