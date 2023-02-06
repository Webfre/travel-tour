import React, { useEffect } from 'react';
import Aos from 'aos';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

import Data from '../../data';
import 'aos/dist/aos.css';
import './main.scss';

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='main container section'>
      <div className='section__title'>
        <h3 className='title'>Most visited destinations</h3>
      </div>

      <div className='section__content grid'>
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => (
            <div key={id} data-aos='fade-up' className='content-destination'>
              <div className='destination__img'>
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className='destination__card'>
                <h4 className='card__title'>{destTitle}</h4>
                <span className='card__location flex'>
                  <HiOutlineLocationMarker className='icon' />
                  <span className='card__name'>{location}</span>
                </span>

                <div className='fees flex'>
                  <div className='grade'>
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className='price'>
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className='desc'>
                  <p>{description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS
                  <HiOutlineClipboardCheck className='icon' />
                </button>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default Main;
