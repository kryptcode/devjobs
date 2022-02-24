import Link from 'next/link'
import React from 'react'

const JobInfo = ({ data }) => {
  return (
    <div className='w-[90%] md:w-2/3 mx-auto bg-gray-900 rounded-lg p-4 mb-24'>
        <div className='space-x-3 text-[#6d7f97] mb-3 text-md font-semibold'>
            <span>{data.postedAt}</span> 
            <span>.</span> 
            <span>{data.contract}</span>
        </div>
        <div className='flex justify-between items-center mb-12 flex-col md:flex-row text-center md:text-justify space-y-6 md:space-y-0'>
            <div>
                <h3 className='text-white text-2xl font-bold mb-2'>
                    {data.position}
                </h3>
                <h6 className='text-[#5964e0] text-sm'>
                    {data.location}
                </h6>
            </div>
            <div>
                <button className='bg-[#5964e0] py-4 px-7 text-white font-semibold rounded-lg hover:scale-105 duration-150'>
                    <Link href={data.apply}>
                        Apply Now
                    </Link>
                </button>
            </div>
        </div>
        <div className='text-gray-500 mb-12'>
            {data.description}
        </div>

        <div className='mb-12'>
            <h2 className='text-white text-2xl font-semibold mb-7'>Requirements</h2>

            <p className='text-gray-500 mb-8'>
                {data.requirements.content}
            </p>

            <ul className='space-y-4'>
                {
                    data.requirements.items.map(item => (
                            <li className=' text-gray-500'>- {item}</li>
                    ))
                }
            </ul>
        </div>

        <div>
            <h2 className='text-white text-2xl font-semibold mb-4'>What will you do</h2>

            <div className='text-gray-500 mb-12'>
                {data.role.content}
            </div>

            <div className='space-y-4'>
                {
                    data.role.items.map(item => (
                        <div className='text-gray-500'>
                            - {item}
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default JobInfo