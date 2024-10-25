'use client'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import { socialItems } from '@/data'
import { useState } from 'react'
import SocialItem from '../aside/SocialItem'
import Image from '../common/Image'
import Button from '../ui/Button'
import Card from '../ui/Card'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to a server
  }

  const inputStyle = `w-full focus:outline-none focus:border-secondary-100/80 placeholder:text-xs placeholder:text-gray-500`


  return (
    <SectionWrapper id='contact'>
      <SectionTitle text="Visit my portfolio and keep your feedback" className='sticky top-0 z-30 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='Contact with me' className='leading-10 sm:leading-relaxed' />


      <div className='w-full sm:w-10/12 sm:mx-auto flex flex-col gap-space16 md:flex-row py-space24'>
        <Card className="md:w-1/2 lg:w-1/3 p-space20" hoverEffect={false}>
          <div className="mb-6 text-gray-500 group">
            <div className="overflow-hidden max-h-[180px] rounded-xl">
              <Image
                width={0}
                height={0}
                sizes='100vw'
                src="/images/contact.png"
                alt="Hands reaching out"
                className="rounded-lg w-full object-cover mb-4 group-hover:scale-105 duration-300"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-300 leading-10 mt-space20 mb-space8">MD Maruf Hossain</h2>
            <p className="text-gray-400 mb-4">Frontend Developer</p>
            <p className="mb-4">I am available for freelance work. Connect with me via and call in to my account.</p>
            <p className="mb-2">Phone: <span className="text-gray-300">+880 1888 41 7171</span></p>
            <p className="mb-4">Email: <span className="text-gray-300">marufme.dev@gmail.com</span></p>
          </div>

          <div>
            <p className="mb-4 text-xs text-gray-400 uppercase tracking-wide">Find with me</p>
            <div className="flex gap-space16">
              {socialItems.map((item) => <SocialItem key={item.id} {...item} />)}
            </div>
          </div>
        </Card>


        <form onSubmit={handleSubmit} className="md:w-1/2 lg:w-2/3 h-full">
          <Card hoverEffect={false} className='w-full p-space20 pb-space32 contact-form-wrapper'>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full space-y-space4">
                <label htmlFor="name" className='text-sm text-gray-500 block'>Your Name</label>

                <input
                  required
                  id='name'
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
              <div className="w-full space-y-space4">
                <label htmlFor="phone" className='text-sm text-gray-500 block'>Phone Number</label>

                <input
                  type="tel"
                  id='phone'
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="w-full my-space16 space-y-space4">
              <label htmlFor="email" className='text-sm text-gray-500 block'>Email</label>

              <input
                id='email'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle + 'w-full'}
                required
              />
            </div>

            <div className="w-full my-space16 space-y-space4">
              <label htmlFor="subject" className='text-sm text-gray-500 block'>Subject</label>

              <input
                type="text"
                id='subject'
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={inputStyle + 'w-full'}
                required
              />
            </div>

            <div className="w-full my-space16 space-y-space4">
              <label htmlFor="message" className='text-sm text-gray-500 block'>Your message</label>

              <textarea
                id='message'
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={inputStyle + 'w-full h-[12rem]'}
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full !text-sm"
            >
              SEND MESSAGE
            </Button>
          </Card>
        </form>
      </div>
    </SectionWrapper>
  )
}

export default Contact
