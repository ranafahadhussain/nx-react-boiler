import React from 'react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { styled } from '@tote/ui';
const PasswordRegex = RegExp(
  '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,30}$'
);
const schema = z.object({
  email: z.string({ required_error: 'Email isxxxx required' }),
  password: z.string().regex(PasswordRegex ,{message: "Pleae sne sdsiajashd ak"})
});

type FormValues = z.infer<typeof schema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="group">
        <label htmlFor="email">Name</label>
        <input {...register('email')}  />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="group">
        <label htmlFor="age">Age</label>
        <input {...register('password')} type = "password" className = {errors.password &&  'error danger' }/>
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};
export default Login;

const Form = styled('form', {
  margin: '30px auto 10px',
  maxWidth: 600,
  '.group': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    marginBottom: '1rem',
  },
  label: {
    alignSelf: 'center',
    marginRight: 10,
  },
  input: {
    gridColumn: 'span 3',
  },
  '.error': {
    fontSize: '0.8em',
    color: '$red11',
    gridColumn: '2 / span 3',
  },
});
