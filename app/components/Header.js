import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-center items-center gap-10 text-xl py-8">
            <Link href='/city/Boston'>Boston</Link>
            <Link href='/city/Paris'>Paris</Link>
            <Link href='/city/Tokyo'>Tokyo</Link>
            <Link href='/city/Berlin'>Berlin</Link>
        </header>
    )
}
 
export default Header;