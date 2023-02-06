import React, { useEffect } from 'react';
import Aos from 'aos';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TbApps } from 'react-icons/tb';
import { SiTripadvisor } from 'react-icons/si';

import Promo from '../../assets/Video/promo.mp4';
import 'aos/dist/aos.css';
import './home.scss';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={Promo} autoPlay muted loop type='video/mp4' />

      <div className='home__content'>
        <div className='home__text'>
          <span data-aos='fade-up' className='small__text'>
            USA Travel Guide
          </span>
          <h1 data-aos='fade-up' className='home__title'>
            Search your holidays
          </h1>
        </div>

        <div data-aos='fade-up' className='card grid'>
          <div className='dest-input'>
            <label htmlFor='city'>
              Search your destination
              <div className='input flex'>
                <input type='text' placeholder='Enter name...' />
                <GrLocation className='icon' />
              </div>
            </label>
          </div>
          <div className='date-input'>
            <label htmlFor='date'>
              Select your date:
              <div className='input flex'>
                <input type='date' />
              </div>
            </label>
          </div>
          <div className='price-input'>
            <div className='label__total flex'>
              <label htmlFor='price'>Max price:</label>
              <h3 className='total'>$5000</h3>
            </div>
            <div className='input flex'>
              <input type='range' max='5000' min='400' />
            </div>
          </div>

          <div className='search__options flex'>
            <HiFilter className='icon' />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos='fade-up' className='home__bottom flex'>
          <div className='right-icons'>
            <FiFacebook className='icon' />
            <FiInstagram className='icon' />
            <AiFillTwitterCircle className='icon' />
          </div>
          <div className='left-icons'>
            <TbApps className='icon' />
            <SiTripadvisor className='icon' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
