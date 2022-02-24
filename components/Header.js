import { useRouter } from "next/router"


const Header = () => {
    const router = useRouter()
    return (
        <div className="bg-[url('/images/desktop/bg-pattern-header.svg')] bg-cover bg-center h-[18vh] flex flex-col justify-center pl-16 mb-6">
            <div 
                className="cursor-pointer"
                onClick={() => router.push('/')}    
            >
                <img src="/images/desktop/logo.svg" alt="devjobs" />
            </div>
        </div>
    )
}

export default Header