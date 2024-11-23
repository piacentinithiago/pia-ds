import { FC, HTMLAttributes } from "react";

interface Props {
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark';
  message: string;
  dismissible?: boolean;
  onClose?: () => void;
}

export type AlertProps = Props & HTMLAttributes<HTMLDivElement>;

export const Alert: FC<AlertProps> = ({
  variant = 'primary',
  message,
  dismissible = false,
  onClose,
  ...props
}) => {
  return (
    <div className={`alert alert-${variant}`} role="alert" {...props}>
      {dismissible && (
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      )}
      {message}
    </div>
  );
};
