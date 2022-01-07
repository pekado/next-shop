import React, { useState } from 'react';
import Page from '../components/Page';
import Input from '../components/Input';
import Field from '../components/Field';
import Button from '../components/Button';
import { fetchJson } from '../lib/api';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSignIn } from '../hooks/user';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInError, signInLoading, signIn } = useSignIn();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valid = await signIn(email, password);
    if (valid) {
      router.push('/');
    }
    console.log(signInError, signInLoading, valid);
  };

  return (
    <Page title='Sign In'>
      <form onSubmit={handleSubmit}>
        <Field label='Email'>
          <Input
            type='email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label='Password'>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>
        {signInError && <p className='text-red-700'>Invalid credentials</p>}
        {signInLoading ? (
          <p>...loading</p>
        ) : (
          <Button type='submit'>Sign-In</Button>
        )}
      </form>
    </Page>
  );
}
