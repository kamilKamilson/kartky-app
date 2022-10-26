import Button from '@/components/atoms/Button/Button';

const Login = () => {
  return (
    <div>
      <h2>Welcome back</h2>
      <label className="font-semibold mb-0.5 block mt-9">Email</label>
      <input
        type={'text'}
        placeholder={'example@example.com'}
        className="border-2 border-gray-200 rounded-lg px-4 py-3 w-full placeholder:gray-400 mb-9"
      />
      <Button isFull>Log in</Button>
    </div>
  );
};

export default Login;
