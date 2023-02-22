import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col lg:flex-row gap-7 mb-20'>
            <div className='lg:w-[65%] xl:w-[70%] '>
                <img src="/image-web-3-mobile.jpg" alt="" className='md:hidden md:mx-auto' />
                <img src="/image-web-3-desktop.jpg" alt="" className='hidden md:inline-block' />
                <div className='lg:grid lg:grid-cols-2 mt-10 '>
                    <div className='mb-3'>
                        <h1 className='text-4xl text-neutral-very-dark-blue font-extrabold xl:pr-15 lg:pr-6 lg:text-5xl xl:text-7xl'>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className=''>
                        <p className='text-lg lg:text-md tracking-wide lg:tracking-normal lg:leading-6 leading-7 text-neutral-dark-gray-blue lg:pb-3 pb-6 xl:pb-16'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?
                        </p>
                        <button className='bg-primary-soft-red text-neutral-off-white font-mono font-bold px-6 py-3 text-xl lg:text-md tracking-widest hover:bg-neutral-very-dark-blue'>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className='bg-neutral-very-dark-blue lg:w-[35%] xl:w-[30%] px-6'>
                <h2 className='text-2xl xl:text-5xl font-bold text-primary-soft-orange pt-6 pb-2'>New</h2>
                <div className='py-6  border border-x-0 border-t-0 border-b-neutral-off-white'>
                    <h3 className='text-xl lg:text-[1.25rem] lg:mb-1 lg:leading-6 font-bold text-neutral-off-white mb-3 cursor-pointer hover:text-primary-soft-orange'>Hydrogen VS Electric Cars</h3>
                    <p className='text-neutral-gray-blue pb-3'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className='py-6 border border-x-0 border-t-0 border-b-neutral-off-white '>
                    <h3 className='text-xl lg:text-[1.25rem] lg:mb-1 lg:leading-6 font-bold text-neutral-off-white mb-3 cursor-pointer hover:text-primary-soft-orange'>The Downsides of AI Artistry</h3>
                    <p className='text-neutral-gray-blue pb-3'>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className='pt-6 pb-3'>
                    <h3 className='text-xl lg:text-[1.25rem] mb-3 lg:mb-1 lg:leading-6 font-bold text-neutral-off-white cursor-pointer hover:text-primary-soft-orange'>Is VC Funding Drying Up?</h3>
                    <p className='text-neutral-gray-blue pb-3'>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                </div>
            </div>
        </div>
    )
}

export default Hero