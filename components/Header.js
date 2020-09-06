import Link from 'next/link';

const Header = () => (
    <div className="header">
        <div className="header-text">
            <h2>Ellodev</h2>
        </div>
        <div className="header-button-continer">
            <div className="header-button">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div className="header-button">
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
            <div className="header-button">
                <Link href="/projekts">
                    <a>Projects</a>
                </Link>
            </div>
            <div className="header-button">
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
        </div>
    </div>
)

export default Header;