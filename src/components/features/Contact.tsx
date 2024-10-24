'use client'
import { SectionHeaderTitle, SectionTitle } from '@/components/common/SectionTitles'
import SectionWrapper from '@/components/common/SectionWrapper'
import { socialItems } from '@/data'
import { useState } from 'react'
import SocialItem from '../aside/SocialItem'
import Image from '../common/Image'
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


  return (
    <SectionWrapper id='contact'>
      <SectionTitle text="Visit my portfolio and keep your feedback" className='sticky top-0 z-20 bg-primary-100/90 py-space8' />
      <SectionHeaderTitle text='Contact with me' className='leading-10 sm:leading-relaxed' />


      <div className='w-full sm:w-10/12 sm:mx-auto flex flex-col gap-space16 md:flex-row py-space24'>
        <Card className="md:w-1/3 p-space20" hoverEffect={false}>
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


        <form onSubmit={handleSubmit} className="md:w-2/3 h-full">
          <Card hoverEffect={false} className='w-full p-space20 contact-form-wrapper'>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                // className="bg-gray-800 rounded p-2 w-full shadow-[1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-800 rounded p-2 w-full"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 rounded p-2 w-full my-space16"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              value={formData.subject}
              onChange={handleChange}
              className="bg-gray-800 rounded p-2 w-full"
              required
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              value={formData.message}
              onChange={handleChange}
              className=" rounded p-2 w-full h-32 my-space16"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full md:w-auto"
            >
              SEND MESSAGE
            </button>
          </Card>
        </form>
      </div>
    </SectionWrapper>
  )
}

export default Contact
