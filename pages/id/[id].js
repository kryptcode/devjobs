import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../../components/Header'
import JobInfo from '../../components/JobInfo'

const jobPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Head>
            <title>
                DevJobs | {data.company}
                <link rel="icon" href="/favicon.ico" />
            </title>
      </Head>

      <Header />

      <div className='w-[90%] md:w-2/3 mx-auto flex bg-gray-900 rounded-lg mb-12 flex-col md:flex-row p-3 md:p-0'>
        <div style={ { backgroundColor: data.logoBackground } } className='flex justify-center items-center rounded-md w-20 p-4 md:w-40 mx-auto'>
            <img src={`/images/logos/${data.company.toLowerCase()}.svg`} alt="" className='w-10 md:w-20' />
        </div>
        <div className='flex justify-between w-[100%] items-center p-4 flex-col md:flex-row'>
          <div className='p-6 flex-grow'>
            <h3 className='text-2xl text-white font-semibold mb-5'>{data.company}</h3>

            <h6 className='text-gray-300 text-sm font-semibold'>
              {data.company.toLowerCase()}.com
            </h6>
          </div>
          <button className=' text-white bg-gray-400 py-2 px-4 rounded-lg font-bold hover:opacity-90 hover:scale-105 duration-150'>
            <Link href={data.website}>
              Company Site
            </Link>
          </button>
        </div>
      </div>

      <JobInfo data={data} />

      <footer className='w-[80%] mx-auto bg-gray-900 p-6 flex items-center'>
        <div className='flex-grow hidden md:block'>
          <h2 className='text-white font-semibold text-3xl mb-4'>
            {data.position}
          </h2>
          <h5 className='text-gray-100 text-lg font-semibold'>
            {data.company}
          </h5>
        </div>
        <div>
          <button className='text-white bg-[#5964e0] w-[100%] py-3 px-6 rounded-lg hover:scale-105 duration-150'>
          <Link href={data.apply}>
              Apply Now
            </Link>  
          </button>
        </div>
      </footer>
    </div>
  )
}

export default jobPage

export async function getServerSideProps(context) {
  const { id } = context.query

  const results = await fetch('https://jsonkeeper.com/b/TRF6').then(res => res.json())

  const data = results[(id - 1)]
  
  return {
    props: {
      data,
    }
  }
}
