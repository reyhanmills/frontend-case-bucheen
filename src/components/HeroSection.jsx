import heroMockup from '../assets/hero-mockup.png'
import arrowDown from '../assets/arrow-down.png'

function HeroSection() {
    return (
        <section className='bg-[#FFB9AF]/10'>
            <div className='mx-auto flex min-h-[730px] max-w-[1200px] items-center justify-between'>

                {/* Sol içerik */}
                <div className='max-w-[563px] flex flex-col gap-10'>

                    <h1 className='text-[56px] font-semibold leading-[1] text-[#262626]'>
                        Find <span className='text-[#FF725E]'>Match Now</span>
                        <br />
                        and Grow Your
                        <br />
                        Feelings
                    </h1>

                    <p className='max-w-[527px] text-[16px] leading-8 text-[#727272]'>
                        There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
                    </p>

                    <div className='flex h-[64px] w-[427px] items-center rounded-[16px] bg-white px-4'>

                        <div className='cursor-pointer flex items-center text-[16px] text-[#727272] gap-3'>
                            <span>Male</span>
                            <img src={arrowDown} alt="" />
                        </div>

                        <div className='ml-12 h-10 w-px bg-[#727272]'></div>

                        <div className='flex items-center ml-10 cursor-pointer text-[16px] text-[#727272] gap-3'>
                            <span>Female</span>
                            <img src={arrowDown} alt="" />
                        </div>

                        <button className='ml-auto h-[48px] w-[124px] cursor-pointer rounded-[12px] bg-[#FF725E] text-[14px] font-medium text-white'>
                            Find Now
                        </button>

                    </div>

                </div>

                {/* Sağ görsel */}
                <div className='flex justify-end pl-12'>
                    <img
                        src={heroMockup}
                        alt='Bucheen mobile'
                        className='w-[620px] max-w-none translate-x-16'
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroSection