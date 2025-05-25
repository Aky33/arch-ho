import React from 'react';
import { Link } from 'react-router-dom';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <header>
                <nav>
                    <Link to='/' style={{ marginRight: 10}}>Home</Link>
                    <Link to='/kategorie' style={{ marginRight: 10}}>Kategorie</Link>
                    <Link to='/recepty' style={{ marginRight: 10}}>Recepty</Link>
                    <Link to='/recepty/nahodne' style={{ marginRight: 10}}>Náhodný výběr</Link>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <small>@ 2025 My App</small>
            </footer>
        </div>
    )
}

export default Layout