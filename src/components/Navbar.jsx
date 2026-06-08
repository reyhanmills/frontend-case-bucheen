import { useState } from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="relative border-b border-[#DDDDDD] bg-white">
            <nav className="mx-auto flex h-24 max-w-[1200px] items-center justify-between px-7 lg:h-32 lg:px-0">

                {/* Logo */}
                <div>
                    <img src={logo} alt="Bucheen Logo" className="w-[120px] lg:w-auto" />
                </div>

                {/* Desktop Links */}
                <ul className="hidden gap-10 text-base text-[#727272] lg:flex">
                    <li>
                        <a href="#" className="text-[#FF725E]">Home</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-6 lg:flex">
                    <button className="h-12 cursor-pointer rounded-2xl border border-[#FF725E] px-8 text-sm font-medium text-[#FF725E]">
                        Sign In
                    </button>

                    <button className="h-12 cursor-pointer rounded-2xl bg-[#FF725E] px-8 text-sm font-medium text-white">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl text-[#262626] lg:hidden"
                >
                    {isOpen ? '×' : '☰'}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute left-0 top-full z-50 w-full border-b border-[#DDDDDD] bg-white px-7 py-6 lg:hidden">
                    <ul className="flex flex-col gap-5 text-base text-[#727272]">
                        <li>
                            <a href="#" className="text-[#FF725E]">Home</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>

                    <div className="mt-6 flex flex-col gap-3">
                        <button className="cursor-pointer h-12 rounded-2xl border border-[#FF725E] text-sm font-medium text-[#FF725E]">
                            Sign In
                        </button>

                        <button className="cursor-pointer h-12 rounded-2xl bg-[#FF725E] text-sm font-medium text-white">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar


// Desktop görünümde navbar yapısını Figma tasarımına uygun olacak şekilde üç ana bölüme ayırdım: 
// solda logo, ortada navigation linkleri ve sağda kullanıcı aksiyon butonları. 
// İçeriği `max-w-[1200px]` ve `mx-auto` kullanarak sayfa ortasına hizaladım. 
// Navbar yüksekliğini desktop tasarıma uygun olması için `lg:h-32` ile belirledim. 
// Linkleri yatay şekilde göstermek için `flex`, `items-center`, `justify-between` ve `gap` class’larını kullandım. 
// Desktop görünümde menü linkleri ve Sign In / Sign Up butonları görünürken, bu yapıyı sadece büyük ekranlarda aktif 
// etmek için `lg:flex` breakpoint’inden yararlandım. 
// Böylece desktop tasarım düzenli, ortalanmış ve Figma’ya yakın bir görünüme sahip oldu.

// h-32 → 128px navbar yüksekliği.
// max-w-[1200px] → tasarımdaki içerik genişliği.
// mx-auto → container’ı ortalar.
// justify-between → logo, menü ve butonları üç tarafa yayar.
// gap-10 → menü linkleri arası 40px.

// buton ozellikleri
// h-12 → 48px
// rounded-2xl → yaklaşık 16px radius
// bg-[#FF725E] → primary coral
// text-sm font-medium → button typography

// Navbar’da desktop ve mobile görünümü Tailwind breakpointleriyle ayırdım. 
// Desktop’ta navigation linkleri ve auth butonları görünürken, mobile ve tablet görünümde hamburger menüye geçiyor. 
// Menü açma-kapama işlemini React useState ile yönettim.
// Bu sayede component sade, okunabilir ve responsive hale geldi.