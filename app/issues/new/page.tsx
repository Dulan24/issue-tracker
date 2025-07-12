'use client'

import { Button, Callout, TextArea, TextField, ThemePanel } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, useController, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IssueForm{
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit, formState:{errors}} = useForm<IssueForm>();
  const [error, serError] = useState('');

  return (
    <div className='max-w-xl'>
      {error && 
        <Callout.Root color='red' className='mb-5'>
        {error}
        </Callout.Root>}
      <form 
      className='space-y-3' 
      onSubmit={handleSubmit(async(data) => {
        try {
          console.log(data);
          await axios.post('/api/issues', data);
          router.push('/issues')
        } catch (error) {
          console.log(error)
          serError('An unexpected error occured.')
        }
      })}
      >
          <TextField.Root 
            placeholder="Title" 
            {...register('title')} 
            />
          <Controller 
            name='description'
            control={control}
            render={({field})=><SimpleMDE placeholder='Description' {...field}/>}
            />
          <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage
