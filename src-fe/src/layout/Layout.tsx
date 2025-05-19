import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <header>
                <h2>My App</h2>
            </header>
            <main>{children}</main>
            <footer>
                <small>@ 2025 My App</small>
            </footer>
        </div>
    )
}

export default Layout