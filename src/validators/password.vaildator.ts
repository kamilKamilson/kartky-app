import { RefinementCtx } from 'zod';

const password = (
  { password, passwordConfirmation }: { password: string; passwordConfirmation: string },
  ctx: RefinementCtx
) => {
  if (password.toLowerCase() === password) {
    ctx.addIssue({
      code: 'custom',
      path: ['password'],
      message: 'Password must contain uppercase letter'
    });
  }

  //eslint-disable-next-line
  if (!password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    ctx.addIssue({
      code: 'custom',
      path: ['password'],
      message: 'Password must contain special character'
    });
  }

  if (!password.match(/\d+/g)) {
    ctx.addIssue({
      code: 'custom',
      path: ['password'],
      message: 'Password must contain number'
    });
  }

  if (password !== passwordConfirmation) {
    ctx.addIssue({
      code: 'custom',
      path: ['passwordConfirmation'],
      message: ''
    });
  }
};

export default password;
