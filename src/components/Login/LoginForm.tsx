'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Styles from './Login.module.scss';
import { CustomButton } from '../Button';
import clsx from 'clsx';
import { styleText } from 'node:util';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    setSubmitted(true);

    if (email !== 'a@a.com') {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (password !== 'user') {
      setPassError(true);
      hasError = true;
    } else {
      setPassError(false);
    }

    if (!hasError) {
      router.push('/dashboard');
    }
  };

  return (
    <div className={Styles.formContainer}>
      <form className={Styles.formGroup} onSubmit={handleSubmit}>
        <h2 className={Styles.pageTitle}>Sign In</h2>
        <p className={Styles.textFormDesc}>
          Just sign in if you have an account in here. Enjoy our Website
        </p>

        <div className={Styles.formWrap}>
          <div className={Styles.formMarg}>
            <div
              className={clsx(
                Styles.inputGroup,
                submitted && (emailError ? Styles.wrong : Styles.true)
              )}
            >
              <input
                id='email'
                type='email'
                className={Styles.customInput}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                required
                placeholder=' '
              />
              <label htmlFor='email'>Your Email / Username</label>
            </div>
          </div>

          <div className={Styles.formMarg}>
            <div
              className={clsx(
                Styles.inputGroup,
                submitted && (passError ? Styles.wrong : Styles.true)
              )}
            >
              <input
                id='password'
                type='password'
                className={Styles.customInput}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPassError(false);
                }}
                required
                placeholder=' '
              />
              <label htmlFor='password'>Enter Password</label>
            </div>
          </div>

          <div className={Styles.formMarg}>
            <div className={clsx(Styles.othGroup, 'flex mb-5')}>
              <div className={clsx(Styles.checkboxContainer, 'flex gap-1.5')}>
                <input
                  type='checkbox'
                  id='rememberMe'
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <label htmlFor='rememberMe'>Remember Me</label>
              </div>

              <Link href={''} className={Styles.forgotPassword}>
                Forgot Password
              </Link>
            </div>
          </div>

          <CustomButton variant='primary' size='long'>
            Login
          </CustomButton>
        </div>
        <div className={Styles.switchForm}>
          <Link href='/register'>
            Don&apos;t have an Square account? Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
