import React, { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  htmlFor?: string;
}

const Label = ({ children, className, htmlFor }: PropsWithChildren<Props>) => {
  return (
    <label htmlFor={htmlFor} className={`font-semibold mb-0.5 block ${className}`}>
      {children}
    </label>
  );
};

export default Label;
