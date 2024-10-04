import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="navbar">
            <div className="navbar-start logo px-3">
                <Image src='/images/hexhomes-logo.png' alt="HexHomes" width={100} height={40} />
            </div>
            <nav className="navbar-end">
                <Link href="/" className='btn '>Home</Link>
                <Link href="/Order" className='btn'>Build My Home</Link>
                <Link href="/Sponsors" className='btn'>Sponsors</Link>
                <Link href="/Team" className='btn'>Team</Link>
                <Link href="/Contact" className='btn'>Contact</Link>
                <Link href="/Invest" className='btn'>Invest Now</Link>
            </nav>
        </header>
    );
}