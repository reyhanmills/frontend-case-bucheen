import Search from "../assets/circle-search.svg"
import Heart from "../assets/circle-heart.svg"
import Profile from "../assets/circle-profile.svg"

function HowItWorks() {
    return (
        <section className="w-full border-t border-b border-black bg-white py-20 pt-[404px] pb-8 lg:h-[670px] lg:py-0 lg:pt-[103px]">
            <div className="mx-auto max-w-[1440px] px-7 lg:px-0">
                <div className="w-full max-w-[457px] lg:ml-[140px]">
                    
                    <h2 className="text-[32px] font-semibold leading-[42px] text-[#262626] lg:text-[40px] lg:leading-[52px]">
                        How It Works To Find
                        <br />
                        Your Relationship
                    </h2>

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
        </section>
    )
}



export default HowItWorks

// How It Works section desktop görünümde sabit yüksekliğe ve soldan boşluğa sahip.
// Mobilde taşma olmaması için sabit h-[670px] yerine py-20, soldan boşluk için ise sadece lg:ml-[140px] kullanıldı.
// w-full max-w-[457px] ile içerik mobilde ekrana uyum sağlar, desktop’ta ise tasarımdaki genişliği korur.

// Section yüksekliği mobilde sabit bırakılmadı; py-20 ile içerik kadar alan açıldı, desktop’ta lg:h-[670px] korundu.
// Desktop üst boşluğu lg:pt-[103px] ile korunurken mobilde gereksiz pt değeri kullanılmadı.
// Sol boşluk mobilde kayma oluşturduğu için ml-[140px] yerine sadece desktop’ta çalışan lg:ml-[140px] kullanıldı.
// Sabit w-[457px] yerine w-full max-w-[457px] kullanılarak mobilde taşma engellendi, desktop genişliği korundu.
// px-7 mobil kenar boşluğu için eklendi, lg:px-0 ile desktop container hizası bozulmadı.
// Başlık mobilde text-[32px] leading-[42px], desktop’ta lg:text-[40px] lg:leading-[52px] olacak şekilde düzenlendi.
// İkonların metin yanında ezilmemesi için shrink-0 korunarak responsive görünüm daha stabil hale getirildi.

