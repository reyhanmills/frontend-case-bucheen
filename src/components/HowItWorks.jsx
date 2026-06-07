import Search from "../assets/circle-search.svg"
import Heart from "../assets/circle-heart.svg"
import Profile from "../assets/circle-profile.svg"




function HowItWorks() {
    return (
        <section className="h-[670px] w-full border-t border-black bg-white pt-[103px]">
            <div className="mx-auto max-w-[1440px]">
                <div className="ml-[140px] w-[457px]">
                    <h2 className="text-[40px] font-semibold text-[#262626]">
                        How It Works To Find
                        <br />
                        Your Relationship
                    </h2>
                    <div className="mt-12 flex flex-col gap-8">
                        <div className="mt-12 flex flex-col gap-8">
                            <div className="flex items-center">
                                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#FF834F]/30">
                                    <img src={Search} alt="" className="h-[24px] w-[24px]" />
                                </div>

                                <p className="ml-6 text-[16px] font-normal leading-[24px] text-[#737373]">
                                    Find your dating relationship in app and waiting until you get a notification. have a good relationship its started
                                </p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#FF834F]/30">
                                    <img src={Heart} alt="" className="h-[24px] w-[24px]" />
                                </div>

                                <p className="ml-6 text-[16px] font-normal leading-[24px] text-[#737373]">
                                    Dating with benefits and you redefine the expectations of a perfect relationship with your partner
                                </p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#FF834F]/30">
                                    <img src={Profile} alt="" className="h-[24px] w-[24px]" />
                                </div>

                                <p className="ml-6 text-[16px] font-normal leading-[24px] text-[#737373]">
                                    Ideal relationship makes your online dating relationship run more smoothly using this app
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks