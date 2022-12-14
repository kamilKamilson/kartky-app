import Button from '@/components/atoms/Button/Button';
import TextInput from '@/components/molecules/TextInput/TextInput';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiUserCircle, BiLock } from 'react-icons/bi';
import z from 'zod';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}>
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
          <Link to="/auth/forgot-password" className="text-sm text-gray-500">
            Forgot password?
          </Link>
          <div className="mt-10">
            <Button isFull>Login</Button>
          </div>
        </form>
      </FormProvider>
    </motion.div>
  );
};

export default Login;
