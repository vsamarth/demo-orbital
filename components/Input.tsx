import React from 'react';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => (
    <div>
      <input
        ref={ref}
        className="h-12 w-80 border bg-transparent px-4 text-slate-700 outline-none"
        placeholder={label}
        {...props}
      />
    </div>
  )
);

Input.displayName = 'Input';
export default Input;
