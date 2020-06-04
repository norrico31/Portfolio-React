import React, { useState } from 'react'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <header>
                <a to="/" className="logo">Logo</a>
                <div className="hamburger-container" onClick={() => {setToggle(!toggle)}}>
                    <div className="menu">
                        <span className={toggle !== true ? 'open' : 'close'}>Menu</span>
                        <span className={toggle !== false ? 'open' : 'close'}>Close</span>
                        <div className={toggle !== false ? 'hamburger open' : 'hamburger'}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
