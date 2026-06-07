import logo from '../assets/logo.svg'

function Navbar() {
    return (
        <header className="h-32 border-b border-[#DDDDDD]">
            <nav className="mx-auto flex h-full max-w-[1200px] items-center justify-between">
                <div>
                    <img src={logo} alt="Bucheen Logo" />
                </div>

                <ul className="flex gap-10 text-base text-[#727272]">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Support</a></li>

                </ul>

                <div className="flex items-center gap-6">
                    <button className="h-12 cursor-pointer rounded-[2xl] border border-[#FF725E] px-8 text-sm font-medium text-[#FF725E]">Sign In</button>
                    <button className="h-12 cursor-pointer rounded-[2xl] bg-[#FF725E] px-8 text-sm font-medium text-white">Sign Up</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar

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