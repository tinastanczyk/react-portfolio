import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { checkName, validateEmail, checkMessage } from '../utils/helpers';

function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("contactName")} />
      <input {...register("email")} />
      <input {...register("message")} />
      <input type='submit' />
    </form>
  );

}

export default Form;