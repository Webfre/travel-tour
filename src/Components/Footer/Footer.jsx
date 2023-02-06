import React, { useEffect } from 'react';
import Aos from 'aos';
import { FiSend, FiChevronRight } from 'react-icons/fi';
import { MdTravelExplore } from 'react-icons/md';
import { BsTwitter, BsYoutube, BsTelegram } from 'react-icons/bs';
import { SiTripadvisor } from 'react-icons/si';

import video from '../../assets/Video/promo.mp4';
import './footer.scss';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='footer'>
      <div className='video'>
        <video src={video} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div data-aos='fade-up' className='footer__content container'>
        <div className='contacts flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='input flex'>
            <input type='email' placeholder='Enter email address' />
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footer__card flex'>
          <div className='footer__info flex'>
            <div className='footer__logo'>
              <a href='#' className='logo flex'>
                <h2>
                  <MdTravelExplore className='icon' />
                  Travel<span className='light-color'>Tour</span>
                </h2>
              </a>
            </div>

            <div className='footer__desc'>
              The part of the world that is the last to see off the passing day,
              America is a vast region between two oceans, including two
              continents, North and South America, and a mass of islands of
              different sizes, from giant Greenland to tiny Martinique.
            </div>

            <div className='footer__socials'>
              <BsTwitter className='icon' />
              <BsYoutube className='icon' />
              <BsTelegram className='icon' />
              <SiTripadvisor className='icon' />
            </div>
          </div>

          <div className='footer__links grid'>
            <div className='link__group'>
              <span className='group__title'>OUR AGENCY</span>

              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            <div className='link__group'>
              <span className='group__title'>PARTNERS</span>

              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                HostelWorld
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            <div className='link__group'>
              <span className='group__title'>LAST MINUTE</span>

              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                London
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                California
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className='footer__list flex'>
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>

          <div className='footer__prod flex'>
            <small>BEST TRAVEL TOUR WEBSITE</small>
            <small>COPYRIGHTS RESERVED - Mukhametshin Roman 2022</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
