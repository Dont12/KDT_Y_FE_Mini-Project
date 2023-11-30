interface SubmitButtonProps {
  type?: 'submit' | 'button' | 'reset' | undefined;
  content: string;
  activate: boolean;
  className?: string;
  onClick?: VoidFunction;
}

const SubmitButton = ({
  type = 'submit',
  content,
  activate,
  className,
  onClick,
}: SubmitButtonProps) => (
  <button
    type={type}
    className={`bg-mainButton hover:bg-mainButtonHov disabled:bg-gray2 w-full rounded-lg px-4 py-3 text-base font-bold text-white ${className}`}
    disabled={!activate}
    onClick={onClick}
  >
    {content}
  </button>
);

export default SubmitButton;
