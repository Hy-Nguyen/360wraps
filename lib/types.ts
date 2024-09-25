import { InputHTMLAttributes } from 'react';

export type SVGIcon = {
  size?: number;
  className?: string;
};

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  error?: string;
}

export interface CustomerConfirmationProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface BusinessNotificationProps extends CustomerConfirmationProps {
  timeSent: string;
}
