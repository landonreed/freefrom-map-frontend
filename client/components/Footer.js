import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div className="footer d-flex justify-content-between align-items-center">
            <div>
                <h2>Follow FreeFrom</h2>
                <a>
                    <span className="fa-layers fa-fw fa-3x ml-1">
                        <FontAwesomeIcon icon={ faCircle } color="white" />
                        <FontAwesomeIcon icon={ faFacebookF } color="black" transform="shrink-6" />
                    </span>
                </a>
                <a>
                    <span className="fa-layers fa-fw fa-3x ml-1">
                        <FontAwesomeIcon icon={ faCircle } color="white" />
                        <FontAwesomeIcon icon={ faTwitter } color="black" transform="shrink-6" />
                    </span>
                </a>
                <a>
                    <span className="fa-layers fa-fw fa-3x ml-1">
                        <FontAwesomeIcon icon={ faCircle } color="white" />
                        <FontAwesomeIcon icon={ faInstagram } color="black" transform="shrink-6" />
                    </span>
                </a>
            </div>
            <div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="https://freefrom.org">FreeFrom Homepage</a>
                    </li>
                </ul>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="/disclaimer">Disclaimer</a>
                    </li>
                </ul>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="/privacy-policy">Privacy Policy</a>
                    </li>
                </ul>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="/acknowledgements">Acknowledgements</a>
                    </li>
                </ul>
            </div>
            <div>
                <Image
                    className="img img-fluid "
                    src="/images/empowered-by-ragtag.png"
                    alt="Empowered By Ragtag"
                    width="201"
                    height="73" />
            </div>
        </div>
    );
}

export default Footer;
