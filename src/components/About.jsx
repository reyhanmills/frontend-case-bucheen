import circle from '../assets/circle.svg'

function About() {
    return (
        <section className='relative py-24 lg:h-[544px] lg:py-0 w-full overflow-hidden bg-white'>
            {/* Circle görseli sadece desktop görünümde gösteriliyor */}

            <img
                src={circle}
                alt=""
                className=" hidden lg:block absolute left-[-120px] top-[80px] "
            />

            <div className="relative z-10 mx-auto flex max-w-[1200px] justify-center px-7 lg:h-full lg:items-center lg:justify-end lg:px-0">
                <div className="flex w-full max-w-[527px] flex-col">
                    <h2 className="text-[32px] font-bold leading-[42px] text-[#262626] lg:text-[40px] lg:leading-[52px]">
                        Find Match Now and
                        <br />
                        Develop Your Feelings
                    </h2>

                    <p className="mt-6 text-[16px] leading-[32px] text-[#737373]">
                        There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
                    </p>

                    <button className="mt-8 h-[56px] w-[176px] rounded-[8px] bg-[#FF725E] text-[16px] font-medium text-white lg:h-[48px] lg:w-[127px] lg:text-[14px]">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About