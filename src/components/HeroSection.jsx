import heroMockup from '../assets/hero-mockup.png'
import arrowDown from '../assets/arrow-down.png'

function HeroSection() {
    return (
        <section className="overflow-hidden bg-[#FFB9AF]/10">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center px-7 py-12 lg:min-h-[730px] lg:flex-row lg:justify-between lg:px-0 lg:py-0">

                {/* Sol içerik */}
                <div className="order-2 flex w-full max-w-[563px] flex-col gap-8 lg:order-1 lg:gap-10">

                    <h1 className="text-[42px] font-semibold leading-[1.15] text-[#262626] sm:text-[48px] lg:text-[56px] lg:leading-[1]">
                        Find <span className="text-[#FF725E]">Match Now</span>
                        <br />
                        and Grow Your
                        <br />
                        Feelings
                    </h1>

                    <p className="max-w-[527px] text-[16px] leading-8 text-[#727272]">
                        There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
                    </p>

                    <div className="flex h-[74px] w-full items-center rounded-[12px] bg-white px-7 lg:h-[64px] lg:w-[427px] lg:rounded-[16px] lg:px-4">

                        <div className="flex cursor-pointer items-center gap-3 text-[18px] text-[#727272] lg:text-[16px]">
                            <span>Male</span>
                            <img src={arrowDown} alt="" />
                        </div>

                        <div className="mx-auto h-12 w-px bg-[#262626] lg:ml-12 lg:mr-0 lg:h-10 lg:bg-[#727272]"></div>

                        <div className="flex cursor-pointer items-center gap-3 text-[18px] text-[#727272] lg:ml-10 lg:text-[16px]">
                            <span>Female</span>
                            <img src={arrowDown} alt="" />
                        </div>

                        <button className="ml-auto hidden h-[48px] w-[124px] cursor-pointer rounded-[12px] bg-[#FF725E] text-[14px] font-medium text-white lg:block">
                            Find Now
                        </button>

                    </div>

                    <button className="mx-auto h-[58px] w-[132px] cursor-pointer rounded-[10px] bg-[#FF725E] text-[18px] font-medium text-white lg:hidden">
                        Find Now
                    </button>

                </div>

                {/* Sağ görsel */}
                <div className="order-1 mb-10 flex w-full justify-center lg:order-2 lg:mb-0 lg:justify-end lg:pl-12">
                    <img
                        src={heroMockup}
                        alt="Bucheen mobile"
                        className="w-[390px] max-w-none lg:w-[620px] lg:translate-x-16"
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroSection

// Hero section mobilde dikey, desktop görünümde ise iki kolonlu olacak şekilde ayarlandı.
// order classları ile mobilde görsel üstte, desktop’ta içerik solda ve görsel sağda konumlandı.
// Find Now butonu desktop’ta form içinde, mobilde ise ayrı bir buton olarak gösterildi.
