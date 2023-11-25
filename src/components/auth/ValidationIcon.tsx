import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';

interface InputType {
  value: string;
  validationPass: boolean;
}

interface IconProps {
  input: InputType;
}

const ValidationIcon = ({ input }: IconProps): JSX.Element => {
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
