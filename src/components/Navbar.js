import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import dropdownKoding from "../assets/dropdown-koding.png";
import dropdownBahasa from "../assets/dropdown-bahasa.png";
import dropdownDesain from "../assets/dropdown-desain.png";
import dropdownPath from "../assets/dropdown-path.png";
import dropdownBiaya from "../assets/dropdown-biaya.png";
import dropdownSemua from "../assets/dropdown-semua.png";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/navbar.css";
import "../styles/hamburgers.css";

function Navbar() {
    let location = useLocation();

    const dropdown = () => {
        document.querySelector(".dropdownContent").classList.toggle("dflex");
    };
    const removeDropdown = () => {
        document.querySelector(".dropdownContent").classList.remove("dflex");
    };
    const toggleHamburger = () => {
        document.querySelector(".hamburger").classList.toggle("is-active");
        document.querySelector(".navLink").classList.toggle("activeNavLink");
    };
    const removeHamburger = () => {
        document.querySelector(".hamburger").classList.remove("is-active");
        document.querySelector(".navLink").classList.remove("activeNavLink");
    };

    return (
        <nav className='navbar'>
            <div className='navMenu'>
                <NavLink
                    to='/'
                    onClick={() => {
                        removeDropdown();
                        removeHamburger();
                    }}
                >
                    <img className='navTitle' src={logo} alt='' />
                </NavLink>
                <div className='navLink'>
                    <div className='dropdown'>
                        <div
                            className={
                                location.pathname === "/class"
                                    ? "link active"
                                    : "link"
                            }
                            onClick={() => dropdown()}
                        >
                            Kelas <IoIosArrowDown className='icon' />
                        </div>
                        <div className='dropdownContent'>
                            <NavLink
                                to='/class'
                                className='dropCard'
                                onClick={() => dropdown()}
                            >
                                <img src={dropdownKoding} alt='' />
                                <div className='content'>
                                    <p className='text-bold title'>
                                        Kelas Koding
                                    </p>
                                    <p className='text-light desc'>
                                        Aplikasi & Website
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink
                                to='/class'
                                className='dropCard'
                                onClick={() => dropdown()}
                            >
                                <img src={dropdownSemua} alt='' />
                                <div className='content'>
                                    <p className='text-bold title'>
                                        Semua Kelas
                                    </p>
                                    <p className='text-light desc'>
                                        Cari kelas impian
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink
                                to='/class'
                                className='dropCard'
                                onClick={() => dropdown()}
                            >
                                <img src={dropdownDesain} alt='' />
                                <div className='content'>
                                    <p className='text-bold title'>
                                        Kelas Desain
                                    </p>
                                    <p className='text-light desc'>
                                        Desain Grafis & UI/UX
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink
                                to='/class'
                                className='dropCard'
                                onClick={() => dropdown()}
                            >
                                <img src={dropdownPath} alt='' />
                                <div className='content'>
                                    <p className='text-bold title'>
                                        Learning Path
                                    </p>
                                    <p className='text-light desc'>
                                        Belajar mudah dan terarah
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink
                                to='/class'
                                className='dropCard'
                                onClick={() => dropdown()}
                            >
                                <img src={dropdownBahasa} alt='' />
                                <div className='content'>
                                    <p className='text-bold title'>
                                        Kelas Bahasa
                                    </p>
                                    <p className='text-light desc'>
                                        Inggris, Jepang & Korea
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink
                                to='/class'
                                className='dropCard'
                                onClick={() => dropdown()}
                            >
                                <img src={dropdownBiaya} alt='' />
                                <div className='content'>
                                    <p className='text-bold title'>
                                        Benefit & Biaya
                                    </p>
                                    <p className='text-light desc'>
                                        Benefit & biaya mulai dari Rp. 0
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <NavLink
                        to='/class'
                        className='link linkMobile'
                        activeClassName='active'
                        onClick={() => {
                            removeDropdown();
                            removeHamburger();
                        }}
                        exact
                    >
                        Kelas
                    </NavLink>
                    <NavLink
                        to='/challenge'
                        className='link'
                        activeClassName='active'
                        onClick={() => {
                            removeDropdown();
                            removeHamburger();
                        }}
                        exact
                    >
                        Challenge
                    </NavLink>
                    <NavLink
                        to='/event'
                        className='link'
                        activeClassName='active'
                        onClick={() => {
                            removeDropdown();
                            removeHamburger();
                        }}
                        exact
                    >
                        Event
                    </NavLink>
                    <NavLink
                        to='/!'
                        className='link'
                        activeClassName='active'
                        onClick={() => {
                            removeDropdown();
                            removeHamburger();
                        }}
                        exact
                    >
                        Tentang Kami
                    </NavLink>
                </div>
                <div
                    className='hamburger hamburger--slider'
                    onClick={() => toggleHamburger()}
                >
                    <div className='hamburger-box'>
                        <div className='hamburger-inner'></div>
                    </div>
                </div>
            </div>
            <button className='button btnPrimary'>Masuk</button>
        </nav>
    );
}

export default Navbar;
