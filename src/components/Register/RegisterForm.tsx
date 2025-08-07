'use client';

import React, { useState } from 'react';
import Styles from './RegisterFrom.module.scss';
import clsx from 'clsx';
import { CustomButton } from '../Button';
import { useRouter } from 'next/navigation';
import eyeShow from '../../../public/eye-show.png';
import eyeHide from '../../../public/eye-hide.png';
import Image from 'next/image';

export const RegisterForm = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const goToLogin = () => {
    router.push('/login');
  };

  const handleSubmit = () => {
    alert('register');
  };

  return (
    <div className={Styles.formContainer}>
      <form className={Styles.formGroup}>
        <h2 className={Styles.pageTitle}>Register</h2>
        <p className={Styles.textFormDesc}>
          Let&apos;s Sign up first for enter into Square Website. Uh She Up!
        </p>

        <div className={Styles.formWrap}>
          <div className={Styles.formMarg}>
            <div className={clsx(Styles.inputGroup)}>
              <input
                id='firstName'
                type='text'
                className={Styles.customInput}
                required
                placeholder=' '
              />
              <label htmlFor='firstName'>First Name</label>
            </div>

            <div className={clsx(Styles.inputGroup)}>
              <input
                id='lastName'
                type='text'
                className={Styles.customInput}
                required
                placeholder=' '
              />
              <label htmlFor='lastName'>Last Name</label>
            </div>
          </div>

          <div className={Styles.formMarg}>
            <div className={Styles.rowField}>
              <div className={clsx(Styles.inputGroup, Styles.codearea)}>
                <input
                  id='codearea'
                  type='text'
                  className={Styles.customInput}
                  required
                  placeholder=' '
                />
                <label htmlFor='codearea'>+62</label>
              </div>

              <div className={clsx(Styles.inputGroup)}>
                <input
                  id='phonenumber'
                  type='tel'
                  className={Styles.customInput}
                  required
                  placeholder=' '
                />
                <label htmlFor='phonenumber'>Phone Number</label>
              </div>
            </div>

            <div className={clsx(Styles.inputGroup)}>
              <input
                id='country'
                type='tel'
                className={Styles.customInput}
                required
                placeholder=' '
              />
              <label htmlFor='country'>Your Country</label>
            </div>
          </div>

          <div className={Styles.formMarg}>
            <div className={clsx(Styles.inputGroup)}>
              <input
                id='email'
                type='text'
                className={Styles.customInput}
                required
                placeholder=' '
              />
              <label htmlFor='email'>Mail Address</label>
              <span className={Styles.fixedHolder}>@squareteam.com</span>
            </div>
          </div>

          <div className={Styles.formMarg}>
            <div className={clsx(Styles.inputGroup)}>
              <input
                id='pass'
                type={showPass ? 'text' : 'password'}
                className={Styles.customInput}
                required
                placeholder=' '
              />
              <label htmlFor='pass'>Password</label>
              <div
                className={Styles.togglePass}
                onClick={() => setShowPass((prev) => !prev)}
              >
                <Image src={showPass ? eyeHide : eyeShow} alt='' />
              </div>
            </div>

            <div className={clsx(Styles.inputGroup)}>
              <input
                id='confirmpass'
                type={showConfirmPass ? 'text' : 'password'}
                className={Styles.customInput}
                required
                placeholder=' '
              />
              <label htmlFor='confirmpass'>Confirm Password</label>
              <div
                className={Styles.togglePass}
                onClick={() => setShowConfirmPass((prev) => !prev)}
              >
                <Image src={showConfirmPass ? eyeHide : eyeShow} alt='' />
              </div>
            </div>
          </div>

          <div className={Styles.formMsg}>
            <label>Tell us about yourself</label>
            <textarea placeholder='Hello my name...'></textarea>
          </div>

          <div className='flex gap-2.5'>
            <CustomButton variant='secondary' size='medium' onClick={goToLogin}>
              Login
            </CustomButton>
            <CustomButton variant='primary' size='long'>
              Register
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};
