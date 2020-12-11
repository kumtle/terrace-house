import './Body.css';
import React, { Component, PropTypes } from 'react';
import Instagram from './Instagram';

class Body extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const existingScript = document.getElementById('kakao');
    if (!existingScript) {
      window.initKakao();
    }
  }

  render(){
    return (
      <div id='dv-body' >
        <div className='body top-default'>
          <p className='font-monsieur font-60 nomargin darkgray'>Terrace House </p>
          <p className='underbar darkgray hidden'/>
          <p className='font-myeongjo font-16 nomargin darkgray lines'>테 라 스 하 우 스</p>
          <span className="line-6 hidden">since 2020</span>
        </div>
        <div className='gradient gradient-default'/>
        
        <Instagram/>
        <div id='dv-middle'>
          <Instagram/>
          <p className='font-myeongjo'>Language Class</p>
          <p className='font-myeongjo'>韓国語 | 일본어</p>
        </div>
        
        <div id='dv-map'>
          <p className='font-myeongjo font-16 nomargin darkgray'>찾아 오시는 길</p>
          <p/>
          <div id="map"></div>
          <p/>
          <p className='font-default font-13 nomargin darkgray'>서울 마포구 독막로7길 42 가물빌딩 4층</p>
          <p className='font-default font-13 nomargin darkgray'>4floor of gamul building, 404-19, Seogyo-dong, Mapo-go, Seoul</p>
        </div>
      </div>
    );
  }
}

export default Body;