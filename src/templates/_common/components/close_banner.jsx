import React from 'react';
import PropTypes from 'prop-types';

const CloseBanner = ({ has_margin }) => (
    <div id='close_banner_container' className={`invisible ui-helper-clearfix ${has_margin ? 'has_margin' : '' }`}>
        <div><img src="./images/close-banner/icon_left.png" alt="" className='close_banner_img' /></div>
            
    </div>
);

CloseBanner.propTypes = {
    has_margin: PropTypes.bool,
};

export default CloseBanner;
