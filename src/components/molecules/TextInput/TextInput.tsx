import InputError from '@/components/atoms/InputError/InputError';
import Label from '@/components/atoms/Label/Label';
import React, { PropsWithoutRef, useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email';
  icon?: IconType;
}

const TextInput = ({ name, label, type = 'text', icon, ...rest }: PropsWithoutRef<Props>) => {
  const [formType, setFormType] = useState(type);
  const { register } = useFormContext();

  const Icon = icon;

  const id = useId();
  return (
    <div className="form-element">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute top-1/2 -translate-y-1/2 text-2xl text-gray-400 left-3" />
        )}
        <input
          {...register(name)}
          {...rest}
          id={id}
          type={formType}
          className={`border-2 border-gray-200 rounded-lg px-4 py-3 w-full placeholder:gray-400 focus:outline-none focus:border-primary-200 ${
            Icon && 'pl-11'
          }`}
        />
        {type === 'password' && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setFormType(formType === 'password' ? 'text' : 'password')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
            {formType === 'password' ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
      </div>

      <InputError name={name} />
    </div>
  );
};

export default TextInput;
