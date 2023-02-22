import { useState } from 'react'

function Navbar() {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <div className='flex justify-between px-6 py-12 lg:mx-28 xl:max-w-7xl xl:mx-auto'>
                <img src="/logo.svg" alt="logo" />
                <img src="/icon-menu.svg" alt="logo" className={isActive ? `hidden lg:hidden` : `lg:hidden cursor-pointer`} onClick={handleClick} />
                <nav className='hidden lg:block'>
                    <ul className='flex'>
                        <li className='ml-3 mr-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blued cursor-pointer '>Home</li>
                        <li className='ml-3 mr-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blued cursor-pointer '>New</li>
                        <li className='ml-3 mr-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blued cursor-pointer '>Popular</li>
                        <li className='ml-3 mr-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blued cursor-pointer '>Trending</li>
                        <li className='ml-3 mr-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blued cursor-pointer '>Categories</li>
                    </ul>
                </nav>
                <div className={isActive ? `lg:hidden bg-neutral-off-white fixed top-0 right-0 z-10 w-2/3 h-[100%]` : `hidden`}>
                    <div className='bg-transparent fixed top-0 left-0 w-1/3 h-[100%] z-10'></div>
                    <div className='py-12'>
                        <img src="/icon-menu-close.svg" alt="" onClick={handleClick} className='fixed right-5 cursor-pointer' />
                        <nav className='ml-6 mt-48'>
                            <ul>
                                <li className='mb-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blue'>Home</li>
                                <li className='mb-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blue'>New</li>
                                <li className='mb-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blue'>Popular</li>
                                <li className='mb-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blue'>Trending</li>
                                <li className='mb-3 text-xl hover:text-primary-soft-orange text-neutral-very-dark-blue'>Categories</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Navbar