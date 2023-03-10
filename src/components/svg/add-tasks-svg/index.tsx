import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const AddTasksSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;
  return (
    <StyledSvg width="20" height="20" viewBox="0 0 24 24" fill={fill}>
      <path d="M12 2a9.95 9.95 0 014.473 1.055l-.895 1.791A7.949 7.949 0 0012 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c1.09 0 2.129-.22 3.076-.615l.771 1.847A9.962 9.962 0 0112 22C6.48 22 2 17.52 2 12S6.48 2 12 2zm9 10v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm-.4-8.4L22 5 11 16l-4-4 1.4-1.4 2.6 2.6 9.6-9.6z"></path>
    </StyledSvg>
  );
});

AddTasksSvg.displayName = 'AddTasksSvg';

export default AddTasksSvg;
