import React from 'react'
import { useForm } from 'react-hook-form'
import s from './index.module.css'

export default function ContactsForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });
  
  const submit = data => console.log(data);

  const firstnameRegister = register('firstname', {
    required: '*Field "firstname" is required'
  });

  const lastnameRegister = register('lastname', {
    required: '*Field "lastname" is required'
  });

  const messageRegister = register('message', {
    required: '*Field "message" is required'
  });

  return (
    <div>
      <form className={s.contacts_form} onSubmit={handleSubmit(submit)}>
        <div className={s.firstname_and_lastname}>
          <label>
            <p>Имя</p>
            <input 
              type='text' 
              name='firstname' 
              placeholder='Иван'
              {...firstnameRegister}
            />
          </label>

          <label>
            <p>Фамилия</p>
            <input 
              type='text' 
              name='lastname' 
              placeholder='Иванов' 
              {...lastnameRegister}
            />
          </label>
        </div>

        <label>
          <p>Сообщение</p>
          <textarea 
            type='text' 
            name='message' 
            placeholder='Ваше сообщение' 
            {...messageRegister}
          />
        </label>

        <button>Отправить сообщение</button>
      </form>

      <div>
        { errors?.firstname && <p>{ errors?.firstname?.message }</p> }
        { errors?.lastname && <p>{ errors?.lastname?.message }</p> }
        { errors?.message && <p>{ errors?.message?.message }</p> }
      </div>
    </div>
  )
}