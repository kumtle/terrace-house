import './Footer.css';
import React, { Component, PropTypes } from 'react';

class Footer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return (
      <div id='dv-footer' >
        <div>
          <p className='font-myeongjo nomargin'>© 테라스 하우스</p>
          <p className='font-myeongjo nomargin'>tel: 02-6448-0311</p>
        </div>
      </div>
    );
  }
}

export default Footer;