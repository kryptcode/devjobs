import { useRouter } from "next/router"


const JobCards = ({ job }) => {
    const router = useRouter()
  return (
    <div 
        className='cursor-pointer bg-gray-900 rounded-lg py-6 pl-4 hover:-translate-y-3 duration-200'
        onClick={() => router.push(`/id/${job.id}`)}    
    >
        
        <div style={{ backgroundColor: job.logoBackground}} className='p-2 w-12 h-12 flex items-center justify-center rounded-2xl mb-8'>
            <img src={job.logo} alt={job.company} />
        </div>
        <div className='space-x-3 text-[#6d7f97] mb-2'>
            <span>{job.postedAt}</span> 
            <span>.</span> 
            <span>{job.contract}</span>
        </div>
        <h3 className='text-xl font-semibold mb-3'>
            {job.position}
        </h3>
        <p className='text-gray-300 text-sm mb-3'>
            {job.company}
        </p>
        <p className='text-[#5964e0] font-bold'>
            {job.location}
        </p>
    </div>
  )
}

export default JobCards