import Button from '@/components/atoms/Button/Button';
import TextInput from '@/components/molecules/TextInput/TextInput';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiUserCircle, BiLock } from 'react-icons/bi';
import z from 'zod';

interface Inputs {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

const Login = () => {
  const methods = useForm<Inputs>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Welcome back</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-y-6 mt-16">
          <TextInput
            icon={BiUserCircle}
            type="email"
            name="email"
            label="Email"
            placeholder="example@example.com"
          />
          <TextInput
            icon={BiLock}
            type="password"
            name="password"
            label="Password"
            placeholder="at least 8 characters"
          />
          <div className="mt-10">
            <Button isFull>Login</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
