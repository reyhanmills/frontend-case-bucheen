import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

function PopularCard({ image, title, description, bgColor }) {
    return (
        <div className='w-[320px] overflow-hidden rounded-[21px] shadow-xl ${bgColor}'>
            <img src={image} alt={title} className='h-[247px] w-full object-cover' />

            <div className='h-[273px] px-8 pt-8'>
                <h3 className='text-[32px] font-medium text-[#262626]'>
                    {title}
                </h3>

                <p className='mt-4 text-[16px] text-[#737373]'>
                    {description}
                </p>
            </div>


        </div>

    )
}

function MostPopular() {
    return (
        <section className='bg-[#FFF8F7] pt-[92px] pb-20 '>
            <div className='mx-auto max-w-[1440px] px-7 lg:px-0'>
                {/* Başlık Alanı */}
                <div className='mx-auto max-w-[550px] text-center'>
                    <h2 className='text-[32px] font-medium text-[#262626]'>
                        Most Popular In This Week
                    </h2>
                    <p className='mt-6 text-[16px] text-[#737373]'>
                        There are so many platforms from this Pokan to make a task manager manage all your time,
                        the data needed is very useful. and we have it all to get you to be successful
                    </p>
                </div>
                <div>

                </div>

                {/* Kartlar Alanı */}
                <div className='mx-auto mt-16 flex max-w-[1080px] gap-6 overflow-x-auto px-7 pb-8 lg:mt-70 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-[45px] lg:overflow-visible lg:px-0 lg:pb-0'>

                    <div className=' shrink-0 lg:relative relative lg:-top-[192px]'>
                        <PopularCard
                            image={card1}
                            title='Javar Saripun'
                            description='A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.'
                            bgColor='bg-[#FFF8F7]'
                        />
                    </div>


                    <div className='shrink-0 lg:relative lg:-top-[80px]'>
                        <PopularCard
                            image={card2}
                            title='Fausiah Ferd'
                            description='Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.'
                            bgColor='bg-white'
                        />
                    </div>

                    <div>
                        <PopularCard
                            image={card3}
                            title='Shreryl Olap'
                            description='Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.'
                            bgColor='bg-white'
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}
export default MostPopular

//figma referansında birinci kartın bg rengi- boyutu ve shadow'u farklı butunluk bozulmaması için benzer tutmaya çalıştım.