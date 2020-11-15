import Link from 'next/link';

const Header = () => (
    <div className="header">
        <div className="header-text">
            <h2>Ellodev</h2>
        </div>
        <div className="header-button-container">
        <a className="nav-button" href="/">Home</a>
                <a className="nav-button" href="/about">About</a>
                <a className="nav-button" href="/projects">Projects</a>
                <a className="nav-button" href="/blog">Blog</a>
        </div>
    </div>
)

export default Header;