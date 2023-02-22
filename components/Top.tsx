import React from 'react'

function Top() {
    return (
        <div className='flex flex-col lg:flex-row mb-32 gap-8 lg:gap-15 md:mx-auto'>
            <div className='flex mr-3'>
                <div className=''>
                    <img src="/image-retro-pcs.jpg" alt="" className='object-cover h-40 w-72 md:h-[15rem] lg:h-32' />
                </div>
                <div className='ml-4'>
                    <h2 className='text-3xl md:text-2xl text-neutral-gray-blue'>01</h2>
                    <h3 className='text-lg font-bold text-neutral-very-dark-blue cursor-pointer hover:text-primary-soft-red'>Reviving Retro PCs</h3>
                    <p className='text-neutral-dark-gray-blue'>What happens when old PCs are given modern upgrades.</p>
                </div>
            </div>
            <div className='flex mr-3'>
                <div className=''>
                    <img src="/image-top-laptops.jpg" alt="" className='object-fit h-40 w-[14.28rem] md:h-[15rem] md:w-[18rem] lg:h-32' />
                </div>
                <div className='ml-4'>
                    <h2 className='text-3xl md:text-2xl text-neutral-gray-blue'>02</h2>
                    <h3 className='text-lg font-bold text-neutral-very-dark-blue cursor-pointer hover:text-primary-soft-red'>Top 10 Laptops of 2022</h3>
                    <p className='text-neutral-dark-gray-blue'>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className='flex '>
                <div className=''>
                    <img src="/image-gaming-growth.jpg" alt="" className='object-cover h-40 w-[16rem] md:h-[15rem] md:w-[18rem] lg:h-32' />
                </div>
                <div className='flex flex-col justify-start ml-4'>
                    <h2 className='text-3xl md:text-2xl text-neutral-gray-blue'>03</h2>
                    <div>
                        <h3 className='text-lg font-bold text-neutral-very-dark-blue cursor-pointer hover:text-primary-soft-red'>The Growth of Gaming</h3>
                        <p className='text-neutral-dark-gray-blue'>How the pandemic has sparked fresh opportunities.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Top

//gap-8