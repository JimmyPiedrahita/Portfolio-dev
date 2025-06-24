import React from 'react'
import '../styles/ContactForm.css'
import { useTranslation } from '../translations'

function ContactForm() {
  const { t } = useTranslation()
  return (
    <form className="contact-form">
      <div className="contact-form-group">
        <label htmlFor="name">{t('name')}</label>
        <input type="text" id="name" name="name" placeholder={t('enterName')} required />
      </div>
      <div className="contact-form-group">
        <label htmlFor="email">{t('email')}</label>
        <input type="email" id="email" name="email" placeholder={t('enterEmail')} required />
      </div>
      <div className="contact-form-group">
        <label htmlFor="message">{t('message')}</label>
        <textarea id="message" name="message" placeholder={t('enterMessage')} required />
      </div>
      <button className="contact-form-button" type="submit">{t('submit')}</button>
    </form>
  )
}

export default ContactForm