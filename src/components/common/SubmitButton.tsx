interface SubmitButtonProps {
  content: string;
  activate: boolean;
  className?: string;
}

const SubmitButton = ({ content, activate, className }: SubmitButtonProps) => (
  <button
    type='submit'
    className={`bg-mainButton hover:bg-mainButtonHov disabled:bg-gray2 w-full rounded-lg px-4 py-3 text-base font-bold text-white ${className}`}
    disabled={!activate}
  >
    {content}
  </button>
);

export default SubmitButton;
