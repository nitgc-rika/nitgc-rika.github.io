import Link from "next/link"
import { useState } from "react"

import { slide as Menu } from 'react-burger-menu'

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    const handleIsOpen = () => {
        setOpen(!isOpen);
    }

    const closeSidebar = () => {
        setOpen(false);
    }

    return (
        <Menu width={250} right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
            <Link id="home" className="menu-item" href="/" onClick={closeSidebar}>Home</Link>
            <Link id="blog" className="menu-item" href="/blog" onClick={closeSidebar}>Blog</Link>
            <Link id="about" className="menu-item" href="/about" onClick={closeSidebar}>About</Link>
            <Link id="contact" className="menu-item" href="/contact" onClick={closeSidebar}>Contact</Link>
        </Menu>
    )
}