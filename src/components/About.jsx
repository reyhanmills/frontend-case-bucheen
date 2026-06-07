import circle from '../assets/circle.svg'

function About() {
    return (
        <section className='relative h-[544px] w-full bg-white py-16'>
            <div className='mx-auto flex h-full max-w-[1440px] items-center'>

                <div className='flex flex-1 items-center'>
                    <img src={circle} alt="" className='w-[445px]' />
                </div>

                <div className="flex flex-1 flex-col">
                    <h2 className='max-w-[527px] text-[40px] font-bold leading-[52px] text-[#000000]'>
                        Find Match Now and
                        <br />
                        Develop Your Feelings
                    </h2>

                    <p className='mt-6 max-w-[527px] text-[16px] leading-[32px] text-[#737373]'>
                        There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
                    </p>

                    <button className='mt-8 h-[48px] w-[127px] rounded-[8px] bg-[#FF725E] text-[14px] font-medium text-white'>
                        Read More
                    </button>
                </div>

            </div>
        </section>
    )
}

export default About