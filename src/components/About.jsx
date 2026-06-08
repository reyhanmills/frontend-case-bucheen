import circle from '../assets/circle.svg'

function About() {
    return (
        <section className='relative h-[544px] w-full overflow-hidden bg-white'>
            <img
                src={circle}
                alt=""
                className="absolute left-[-120px] top-[80px] top-1/2 w-[380px"
            />

            <div className='relative z-10 mx-auto flex h-full max-w-[1200px] items-center justify-end'>
                <div className="flex w-[527px] flex-col">
                    <h2 className='text-[40px] font-bold leading-[52px] text-[#000000]'>
                        Find Match Now and
                        <br />
                        Develop Your Feelings
                    </h2>

                    <p className='mt-6 text-[16px] leading-[32px] text-[#737373]'>
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