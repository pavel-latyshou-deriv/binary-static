import React from 'react';

const GamingClosePopup = () => (
    <div id='gaming-close-popup' className='invisible gaming-close-popup'>
        <div className='popup-content'>
            <div className='pop-up-header'>
                <h3>Your Gaming account is scheduled to be closed</h3>
                <p className='subtitle'>
                As part of the changes in our product line-up, we will
                be closing Gaming accounts belonging to our UK/Isle of Man clients.
                </p>
                <div className='deriv_banner_close' />
            </div>
            <div className='popup-content-body'>
                <strong>What this means for you</strong>
                <p>
                You can no longer trade digital options on any of our platforms.
                You also can’t deposit funds into your Gaming account.
                </p>
                <p>
                Any open positions on digital options have been closed with full payout.
                </p>
                <strong>What you need to do now</strong>
                <p>Please proceed to withdraw all your funds from your Gaming account 
                    before <strong>30 November 2021</strong>.
                </p>
            </div>
            <footer>
                <button id='accept-btn' className='accept-btn'>OK, I understand</button>
            </footer>
        </div>
    </div>
);

export default GamingClosePopup;