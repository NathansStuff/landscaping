'use client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  message: string;
  mobile: string;
}

function ContactForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        setSubmitted(false);
      });
  };

  return (
    <>
      {submitted ? (
        <div className='my-10 mx-auto flex max-w-2xl flex-col bg-primary p-10 text-white text-center'>
          <h3 className='text-3xl font-bold'>Thank you for your inquiry!</h3>
          <p>We will get back to you ASAP (within 1 business day)</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='mx-auto mb-10 flex max-w-2xl flex-col p-5'>
          <h3 className='text-sm '>Want a free quote?</h3>
          <h4 className='tet-3xl font-bold'>Contact us!</h4>
          <hr className='mt-2 py-3' />
          <label className='mb-5 block'>
            <span className='text-gray-700'>Name</span>
            <input
              {...register('name')}
              className='form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-primary focus:ring'
              placeholder='Name'
              type='text'
            />
          </label>
          <label className='mb-5 block'>
            <span className='text-gray-700'>Email</span>
            <input
              {...register('email')}
              className='form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-primary focus:ring'
              placeholder='Email'
              type='email'
            />
          </label>
          <label className='mb-5 block'>
            <span className='text-gray-700'>Mobile</span>
            <input
              {...register('mobile')}
              className='form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-primary focus:ring'
              placeholder='Mobile'
              type='mobile'
            />
          </label>
          <label className='mb-5 block'>
            <span className='text-gray-700'>Message</span>
            <textarea
              {...register('message')}
              className='form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-primary focus:ring'
              placeholder='Message'
              rows={8}
            />
          </label>
          <input
            type='submit'
            className='focus:shadow-outline cursor-pointer rounded bg-primary py-2 px-4 font-bold text-white shadow hover:bg-primary/70 focus:outline-none'
          />
        </form>
      )}
    </>
  );
}

export default ContactForm;
