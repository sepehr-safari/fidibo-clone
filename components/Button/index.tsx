import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, onClick, className, secondary = false }) => (
  <button
    onClick={onClick}
    className={`${
      secondary ? 'text-cyan-500 border border-cyan-500' : 'text-white bg-cyan-500'
    } rounded-lg p-3 ${className}`}
  >
    {children}
  </button>
);

export default Button;
