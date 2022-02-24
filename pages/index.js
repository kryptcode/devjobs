import Head from 'next/head'
import Header from '../components/Header'
// import Filter from '../components/Filter'
import JobCards from '../components/JobCards'

export default function Home({ data }) {
  return (
    <div className="text-white font-kumbh">
      <Head>
        <title>Devjobs | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <Filter /> */}
      {/* TODO: Add filter functionality */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto'>
        {
          data.map(job => (
            <JobCards key={job.id} job={job} />
          )) 
        }
      </div>

    </div>
  )
};

export async function getServerSideProps(ctx) {
  const data = await fetch('https://jsonkeeper.com/b/TRF6').then(res => res.json())

  return {
      props: {
          data,
      }
  }
}