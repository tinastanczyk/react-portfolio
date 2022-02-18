import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// import { checkName, validateEmail, checkMessage } from '../utils/helpers';

function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder={'Name'} {...register("contactName", {required: true, maxLength: 100})} />
      {errors.contactName?.type === 'required' && 'Name is required.'}
      <input placeholder={'Email'} {...register("email", {required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} />
      {errors.email?.type === 'required' && 'Email is required.'}
      {errors.email?.type === 'pattern' && 'Email must be in proper format. For example: first.last@domain.com.'}
      <input placeholder={'Message'} {...register("message", {required: true, maxLength: 1000})} />
      {errors.message?.type === 'required' && 'A message is required.'}
      <br />
      <br />
      <input type='submit' />
    </form>
  );

}

export default Form;