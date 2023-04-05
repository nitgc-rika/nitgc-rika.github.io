import Link from "next/link"

export default function Header() {
    return (
        <header>
            <Link href={"/"} className={"header-logo"}>群馬高専 理科部</Link>

            <nav className="header-nav">
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/blog"}>Blog</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}