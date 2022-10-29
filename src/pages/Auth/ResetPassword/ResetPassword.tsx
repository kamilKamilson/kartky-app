import Button from '@/components/atoms/Button/Button';
import TextInput from '@/components/molecules/TextInput/TextInput';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiLock } from 'react-icons/bi';
import z from 'zod';
import password from '@/validators/password.vaildator';

interface Inputs {
  password: string;
  passwordConfirmation: string;
}

const schema = z
  .object({
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8)
  })
  .superRefine(password);

const ResetPassword = () => {
  const methods = useForm<Inputs>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Change your password</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-y-6 mt-16">
          <TextInput
            icon={BiLock}
            type="password"
            name="password"
            label="Password"
            placeholder="at least 8 characters"
          />
          <TextInput
            icon={BiLock}
            type="password"
            name="passwordConfirmation"
            label="Password Confirmation"
            placeholder="at least 8 characters"
          />
          <div className="mt-10">
            <Button isFull>Reset</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ResetPassword;
