import { useRef, useEffect } from 'react'
import '../styles/ContactForm.css'
import { useTranslation } from '../translations'
import { useForm, ValidationError } from '@formspree/react'
import { IoSend } from 'react-icons/io5'

function ContactForm() {
  const { t } = useTranslation()
  const [state, handleSubmit] = useForm("xdobvzry")
  const formRef = useRef(null)

  // Effect to handle form submission success
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset()
      alert(t('formSuccess'))
    }
  }, [state.succeeded, t])

  const onSubmit = async (e) => {
    await handleSubmit(e)
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={onSubmit}>
      <div className="contact-form-group">
        <label htmlFor="name">{t('name')}</label>
        <input type="text" id="name" name="name" placeholder={t('enterName')} required />
      </div>
      <div className="contact-form-group">
        <label htmlFor="email">{t('email')}</label>
        <input type="email" id="email" name="email" placeholder={t('enterEmail')} required />
        <ValidationError prefix={t('email')} field="email" errors={state.errors} />
      </div>
      <div className="contact-form-group">
        <label htmlFor="message">{t('message')}</label>
        <textarea id="message" name="message" placeholder={t('enterMessage')} required />
        <ValidationError prefix={t('message')} field="message" errors={state.errors} />
      </div>
      <button className="contact-form-button" type="submit" disabled={state.submitting}>
        <IoSend className="button-icon" /> {t('submit')}
      </button>
    </form>
  )
}

export default ContactForm