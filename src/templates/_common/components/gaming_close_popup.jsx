import React from 'react';
import PropTypes from 'prop-types';

const GamingClosePopup = () => (
    <div className='gaming-close-popup'>
        <div className='popup-content'>
            <div className='pop-up-header'>
                <h3>Your Gaming account is scheduled to be closed</h3>
                <p className='subtitle'>
                As part of the changes in our product line-up,
                we will be closing Gaming accounts belonging to UK clients.
                </p>
            </div>
            <div className='popup-content'>
                <strong>What this means for you</strong>
                <p>
                    You can no longer trade digital options on DTrader, SmartTrader, DBot, and Binary Bot.
                    You also can’t deposit funds into your Gaming account.
                </p>
                <p>
                    Any open positions on digital options have been closed and will be refunded.
                </p>
                <strong>What you need to do now</strong>
                <p>Please proceed to withdraw all your funds from your Gaming account.</p>
            </div>
        </div>
    </div>
);

GamingClosePopup.propTypes = {
    has_margin: PropTypes.bool,
};

export default GamingClosePopup;
