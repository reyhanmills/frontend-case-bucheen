import logo from '../assets/logo.svg'
import call from '../assets/Call.svg'
import message from '../assets/Message.svg'
import location from '../assets/Location.svg'

function Footer() {
    return (
        <footer className="bg-[#FFF1EF]">
            <div className="mx-auto flex max-w-[1200px] flex-col px-7 py-16 lg:grid lg:h-[286px] lg:grid-cols-2 lg:items-center lg:px-0 lg:py-0">
                <div>

                    <img src={logo} alt="Bucheen Logo" />
                    <p className='text-[16px] max-w-[420px] mt-5 text-[#737373]'>
                        The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy
                    </p>

                </div>



                <div className='mt-16 grid grid-cols-2 gap-x-12 gap-y-10 lg:mt-0 lg:grid-cols-3 lg:gap-16'>
                    <div>
                        <h3 className='text-[#FF806E] font-semibold'>About Us</h3>

                        <ul className='mt-6 flex flex-col gap-4 text-[16px] text-[#727272]'>
                            <li>Our people</li>
                            <li>Our categories</li>
                            <li>Contact us</li>
                            <li>Testimonial</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-[#FF806E] font-semibold'>
                            Product
                        </h3>

                        <ul className='mt-6 flex flex-col gap-4 text-[16px] text-[#727272]'>

                            <li>Task Mangement</li>
                            <li>Service</li>
                            <li>Task Schedule</li>
                        </ul>
                    </div>

                    <div className='col-span-2 lg:col-span-1'>
                        <h3 className='text-[#FF806E] font-semibold'>Contact Us</h3>

                        <ul className='mt-6 flex flex-col gap-4 text-[16px] text-[#727272]'>
                            <li className='flex items-center gap-4'>
                                <img src={call} alt="" className='h-5 w-5 shrink-0'/>
                                <span className='whitespace-nowrap'>(021) 3258 4930</span>
                            </li>
                            <li className='flex items-start gap-4'>
                                <img src={message} alt="" className='h-5 w-5'/>
                                <span>Pokan@Hola.com</span>
                            </li>
                            <li className='flex items-start gap-4'>
                                <img src={location} alt="" className='mt-1 h-5 w-5' />
                                <span>Sukabumi, Jawa Barat
                                    <br />
                                    Indonesia, IDN</span>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

        </footer>
    )
}
export default Footer