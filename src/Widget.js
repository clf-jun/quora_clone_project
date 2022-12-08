import React from 'react';
import './Widget.css'
import WidgetOptions from './WidgetOptions';
import fakeAd from './assets/fakeAd.gif';
import {EmojiObjects, ArrowForwardIosOutlined} from "@material-ui/icons/";

function Widget() {
  return (
    <div className='widget'>
        <div className='widget_header'>
            <img className='widget_ad' src={fakeAd} alt="" width={300}/>
            <div className='widget_box'>
              <div className='widget_boxIn'>
                <h5>ADVERTISEMENT</h5>
              </div>
            </div>
        </div>
        <div className='widget_contents'>
          <div className='widget_contents_header'>
            <div className='widget_contents_headerIn'>
            <span className='widget_contents_headerIn_lamp'><EmojiObjects /></span>
              <h5>Quostion for you</h5>
              <span className='widget_contents_headerIn_arrow'><ArrowForwardIosOutlined /></span>
            </div>
          </div>
            <WidgetOptions/>
        </div>
    </div>
  )
}

export default Widget;