'use client'

import { Button, Callout, TextArea, TextField, ThemePanel } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, useController, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';

interface IssueForm{
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit, formState:{errors}} = useForm<IssueForm>();
  

  return (
    <form 
      className='max-w-xl space-y-3' 
      onSubmit={handleSubmit(async(data) => {
        console.log(data);
        await axios.post('/api/issues', data);
        router.push('/issues')
      })}
    >
        <TextField.Root 
          placeholder="Title" 
          {...register('title', {required: true})} 
        />
        {errors.title &&(
          <Callout.Root color='red'>
            <Callout.Text>Title is required.</Callout.Text>
          </Callout.Root>
        )}
        <Controller 
          name='description'
          control={control}
          rules={{ required: true }}
          render={({field})=><SimpleMDE placeholder='Description' {...field}/>}
        />
        {errors.description && (
          <Callout.Root color='red'>
            <Callout.Text>The description is required.</Callout.Text>
          </Callout.Root>
        )}
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage
