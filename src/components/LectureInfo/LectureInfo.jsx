import React from 'react';
import './LectureInfo.css';
import '../../App.css';

import Button from '../Button/Button'
import NewIcon from '../NewIcon/NewIcon'

const title = "Really Long Lecture Title With Big Fancy Words, Even Breaking Onto A New Line!";
const description = 'Compellingly visualize resource-leveling mindshare after 2.0 relationships. Distinctively coordinate competitive initiatives whereas emerging e-markets.';

export default function name(props) {

  // hooks

  
  // page layout
  return (
    <section className='lecture-info'>
      <div className='lecture-info-title'>
        {title}
      </div>
      <div className='lecture-info-description'>
        {description}
      </div>
      <div className='lecture-controls'> 
      <NewIcon new_class='icon icon-large'/>
      <Button variant='card-mover'>∨</Button>
      <Button variant='card-mover'>∧</Button>
      top
      </div>
    </section>
  )
}