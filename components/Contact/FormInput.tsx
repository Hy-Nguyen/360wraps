import { FormInputProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function FormInput({ value, onChange, placeholder, className, error, ...props }: FormInputProps) {
  return (
    <div className="w-full">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'no-ring w-full border-b-2 border-gray-400 bg-main p-2 transition-colors duration-300 ease-in-out focus-visible:border-main-500',
          className,
          error && 'border-red-500'
        )}
        type={props.type || 'text'}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
