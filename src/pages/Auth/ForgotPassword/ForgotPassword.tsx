import Button from '@/components/atoms/Button/Button';
import TextInput from '@/components/molecules/TextInput/TextInput';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiUserCircle } from 'react-icons/bi';
import z from 'zod';
import { useNavigate } from 'react-router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { motion } from 'framer-motion';

interface Inputs {
  email: string;
}

const schema = z.object({
  email: z.string().email()
});

const ForgotPassword = () => {
  const methods = useForm<Inputs>({
    resolver: zodResolver(schema)
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <button
        className="text-primary flex items-center text-sm mb-3 group hover:text-primary-600"
        onClick={() => navigate('/auth/login')}>
        <AiOutlineArrowLeft className="text-xl mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to login page
      </button>
      <h2>Forgot password?</h2>
      <p>
        Fill email field to recieve password reset link. Then follow the information in the message.
      </p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-y-6 mt-16">
          <TextInput
            icon={BiUserCircle}
            type="email"
            name="email"
            label="Email"
            placeholder="example@example.com"
          />
          <div className="mt-10">
            <Button isFull>Send reset link</Button>
          </div>
        </form>
      </FormProvider>
    </motion.div>
  );
};

export default ForgotPassword;
