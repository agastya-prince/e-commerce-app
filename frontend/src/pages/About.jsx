import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>An e-commerce site is a virtual storefront on the internet where businesses sell goods and services directly to customers, offering a convenient way to browse, select, and pay for items online, replacing physical stores with digital catalogs, secure checkouts, and global reach, handling everything from product display to order fulfillment digitally. </p>
        <p>Key Aspects of an E-commerce Site:
          Virtual Storefront: A website or app acting as a digital shop for products or services.
          Online Transactions: Facilitates buying and selling over the internet, including payments.
          Convenience: Allows customers to shop from anywhere, anytime, notes www.geeksforgeeks.org.
          Product Presentation: Uses digital listings, images, and descriptions to showcase items.
          Operations: Manages inventory, processing orders, and customer service digitally.
          Reach: Enables businesses to reach a global audience without a physical location. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>A short mission statement defines your purpose, who you serve, and what you do, often in one clear sentence, like "To empower people through [service/product] to achieve [goal/benefit]", or focusing on impact, such as "To make the world a better place by [specific action]," highlighting core values like innovation, service, or community benefit. </p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality parameters.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your experience is up to the highest level of expectations. </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
