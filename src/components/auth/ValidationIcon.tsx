import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';

import { IconProps } from '@/@types/auth.types';

const ValidationIcon = ({ input }: IconProps) => {
  if (!input.value) return <></>;

  if (input.validationPass) {
    return (
      <i className='text-blue pointer-events-none absolute bottom-3 right-2 h-6 w-6 text-sm'>
        <BsCheckCircleFill />
      </i>
    );
  }

  return (
    <i className='text-red pointer-events-none absolute bottom-3 right-2 h-6 w-6 text-sm'>
      <BsFillXCircleFill />
    </i>
  );
};

export default ValidationIcon;
