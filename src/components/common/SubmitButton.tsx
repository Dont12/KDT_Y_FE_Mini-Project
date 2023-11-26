interface SubmitButtonProps {
  content: string;
  activate: boolean;
}

const SubmitButton = ({
  content,
  activate,
}: SubmitButtonProps): JSX.Element => (
  <button
    type='submit'
    className='bg-mainButton text-subtitle5 pointer mb-6 mt-10 w-full leading-[64px] text-white'
    disabled={!activate}
  >
    {content}
  </button>
);

export default SubmitButton;
