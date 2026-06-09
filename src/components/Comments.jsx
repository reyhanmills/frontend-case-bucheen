import { useState } from 'react'

function CommentCard({ name, location, comment }) {
    return (
        <div className='w-full max-w-[378px] rounded-[16px] border border-[#DDDDDD] bg-white px-6 py-8 lg:h-[278px] lg:w-[378px] lg:px-8'>
            <div className='flex items-center gap-4'>
                <div className='h-[40px] w-[40px] rounded-full bg-[#9D9D9D]'></div>

                <div>
                    <h3 className='text-[16px] font-semibold text-[#262626]'>
                        {name}
                    </h3>

                    <p className='text-[14px] text-[#A0A0A0]'>
                        {location}
                    </p>
                </div>
            </div>

            <p className='mt-6 text-[16px] text-[#737373]'>
                {comment}
            </p>

            <div className='mt-6 text-[18px] text-[#FFB84D]'>
                ★ ★ ★ ★ ★
            </div>
        </div>
    )
}

function Comments() {
    // Mobil görünümde hangi yorum kartının gösterileceğini tutar.
    // 0: birinci kart, 1: ikinci kart, 2: üçüncü kart.
    const [activeCard, setActiveCard] = useState(0)

    return (
        <section className='bg-white pt-24 pb-20 lg:min-h-[700px] lg:pt-[256px] lg:pb-20'>
            <div className='mx-auto max-w-[1440px]'>

                {/* Başlık Alanı */}
                <div className='mx-auto text-center'>
                    <h2 className='text-[32px] font-semibold text-[#262626] lg:text-[40px]'>
                        What Our Customers
                        <br />
                        Have To Say
                    </h2>

                    <p className='mx-auto mt-6 max-w-[320px] text-[16px] text-[#737373] lg:max-w-none'>
                        Here's what our customers say with Bucheen
                    </p>
                </div>

                {/* Mobil Kart Alanı */}
                <div className='mx-auto mt-16 grid justify-items-center px-7 lg:hidden'>
                    {/* activeCard 0 ise birinci kart gösterilir */}
                    {activeCard === 0 && (
                        <CommentCard
                            name='Tasha Wijayanti'
                            location='Curug'
                            comment="This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here"
                        />
                    )}

                    {/* activeCard 1 ise ikinci kart gösterilir */}
                    {activeCard === 1 && (
                        <CommentCard
                            name='Sizuka engkol'
                            location='Indonesia'
                            comment='Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.'
                        />
                    )}

                    {/* activeCard 2 ise üçüncü kart gösterilir */}
                    {activeCard === 2 && (
                        <CommentCard
                            name='Gundam gandim'
                            location='Bulgarian'
                            comment="It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax"
                        />
                    )}
                </div>

                {/* Desktop Kart Alanı */}
                <div className='mx-auto mt-[120px] hidden max-w-[1240px] grid-cols-3 justify-items-center gap-12 lg:grid'>
                    <CommentCard
                        name='Tasha Wijayanti'
                        location='Curug'
                        comment="This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here"
                    />

                    <CommentCard
                        name='Sizuka engkol'
                        location='Indonesia'
                        comment='Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.'
                    />

                    <CommentCard
                        name='Gundam gandim'
                        location='Bulgarian'
                        comment="It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax"
                    />
                </div>

                {/* Mobil Ok Butonları */}
                <div className='mt-8 flex justify-center gap-5 lg:hidden'>
                    <button
                        // Sol oka basılınca bir önceki karta geçer.
                        // Eğer ilk karttaysa tekrar üçüncü karta döner.
                        onClick={() => setActiveCard(activeCard === 0 ? 2 : activeCard - 1)}
                        className='flex h-10 w-10 items-center justify-center rounded-full border border-[#FF725E] text-[20px] text-[#FF725E]'
                    >
                        ←
                    </button>

                    <button
                        // Sağ oka basılınca bir sonraki karta geçer.
                        // Eğer son karttaysa tekrar birinci karta döner.
                        onClick={() => setActiveCard(activeCard === 2 ? 0 : activeCard + 1)}
                        className='flex h-10 w-10 items-center justify-center rounded-full bg-[#FF725E] text-[20px] text-white'
                    >
                        →
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Comments