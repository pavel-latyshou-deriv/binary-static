import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import GamingClosePopup from './gaming_close_popup';

const CloseBanner = ({ has_margin }) => (
    <>
        <div id='close_banner_container' className={`invisible ui-helper-clearfix ${has_margin ? 'has_margin' : '' }`}>
            <div><img src='./images/close-banner/icon_left.png' alt='' className='close_banner_img' /></div>
        </div>
        <GamingClosePopup />
    </>
);

CloseBanner.propTypes = {
    has_margin: PropTypes.bool,
};

export default CloseBanner;
