/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import GamingClosePopup from './gaming_close_popup';

export default class GameCloseBanner extends Component {
    state = {
        popup: false,
    }

    showPopup = () => {
        console.log(12);
        this.setState({
            popup: true,
        });
    }

    render() {
        const { has_margin } = this.props;
        return (
            <div
                id='close_banner_container'
                className={`invisible ${has_margin ? 'has_margin' : ''}`}
            >
                <div className='close_banner_text'>
                    <img
                        src={it.url_for('images/close-banner/icon_left.png')}
                        className='close_banner_img'
                    />
                    <div className='close_banner_text_wrapper'>
                        <h3>Your Gaming Acount is scheduled to be closed</h3>
                        <p>Please proceed to withdraw your funds.</p>
                    </div>
                </div>
                <div onClick={() => this.showPopup} className='close_banner_btn'>{it.L('Learn more')}</div>
                {this.state.popup && <GamingClosePopup />}
            </div>
        );
    }
}

GameCloseBanner.propTypes = {
    has_margin: PropTypes.bool,
};
