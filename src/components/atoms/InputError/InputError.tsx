import React, { PropsWithoutRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { AiOutlineWarning } from 'react-icons/ai';

interface Props {
  name: string;
}

const InputError = ({ name }: PropsWithoutRef<Props>) => {
  const { formState: errors } = useFormContext();
  return (
    (errors as any)[name] && (
      <div className="text-xs text-red-700 flex items-center mt-1">
        <AiOutlineWarning className="mr-1" />
        {(errors as any)[name]?.message}
      </div>
    )
  );
};

export default InputError;
