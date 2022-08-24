import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({mode: 'onChange'})

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <div className='App'>
      <h1>React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> First Name:
          <input {...register('firstName',
            {
              required: 'Поле обязательно для заполнения',
              minLength: { value: 5, message: 'Минимум 5 символов' },
            })} />
        </label>
        <div style={{ height: 20 }}>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
        </div>
        <label> Last Name:
          <input {...register('lastName',
            {
              required: 'Поле обязательно для заполнения',
              minLength: { value: 5, message: 'Минимум 5 символов' },
            })} />
        </label>
        <div style={{ height: 20 }}>
          {errors?.lastName && <p>{errors?.lastName?.message || 'Error'}</p>}
        </div>
        <input type='submit' disabled={!isValid}/>
      </form>
    </div>
  )
}

export default App
