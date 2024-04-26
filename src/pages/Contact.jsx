import { Turnstile } from '@marsidev/react-turnstile'
import { useRef, useState } from 'react'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [responseData, setResponseData] = useState({ message: '', success: true })

  const turnstile = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Add the Turnstile response to the form data
    formData['cf-turnstile-response'] = turnstile.current.getResponse()

    fetch('https://usebasin.com/f/1ecd7b178a19', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setResponseData({
          message: 'Form submitted successfully.',
          success: true
        })
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        setResponseData({
          message: 'Form submission failed. Please try again. Error: ' + response.error,
          success: false
        })
      }
    }).catch(error => {
      setResponseData({
        message: 'Form submission failed. Please try again. Error: ' + error.message,
        success: false
      })
    }).finally(() => {
      turnstile.current.reset()
    })
  }

  const messageColor = responseData.success ? 'green' : 'red'

  return (
    <>
      <div className='px-8 pb-12 flex justify-center gap-5'>
        <div className='bg-white p-6 rounded max-w-3xl grow'>
          {responseData.message && (
            <div className={`p-2 rounded transition-color border border-2 border-${messageColor}-600 bg-${messageColor}-300 mb-2`}>{responseData.message}</div>
          )}
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 pt-2.5'>
            <Input
              label='Name'
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='John Doe'
            />
            <Input
              label='Email'
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='john@example.com'
            />
            <Textarea
              label='Message'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              placeholder='I would like to talk more about ____. Can you help me with ____.'
              rows='6'
            />
            <Turnstile ref={turnstile} siteKey='0x4AAAAAAAYYLuWDNcl0Lf37' className='self-center' />
            <button type='submit' className='rounded-lg text-white font-bold py-4 px-12 bg-blue-700 hover:bg-blue-800 transition-colors duration-150'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
