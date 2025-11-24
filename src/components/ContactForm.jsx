import { useRef, useEffect } from 'react'
import '../styles/ContactForm.css'
import { useTranslation } from '../translations'
import { useForm, ValidationError } from '@formspree/react'
import { IoSend, IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function ContactForm() {
  const { t } = useTranslation()
  const [state, handleSubmit, reset] = useForm("xdobvzry")
  const formRef = useRef(null)

  // Effect to handle form submission success
  useEffect(() => {
    if (state.succeeded) {
      if (formRef.current) {
        formRef.current.reset()
      }
      const timer = setTimeout(() => {
        reset()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded, reset])

  // Effect to handle form submission error
  useEffect(() => {
    if (state.errors?.length > 0) {
      const timer = setTimeout(() => {
        reset()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [state.errors, reset])

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
      <button 
        className={`contact-form-button ${state.succeeded ? 'success' : ''} ${state.errors?.length > 0 ? 'error' : ''}`} 
        type="submit" 
        disabled={state.submitting}
      >
        {state.submitting ? (
          <>
            <AiOutlineLoading3Quarters className="button-icon spin" /> {t('sending')}
          </>
        ) : state.succeeded ? (
          <>
            <IoCheckmarkCircle className="button-icon" /> {t('sent')}
          </>
        ) : state.errors?.length > 0 ? (
          <>
            <IoCloseCircle className="button-icon" /> {t('error')}
          </>
        ) : (
          <>
            <IoSend className="button-icon" /> {t('submit')}
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm