import React from "react";
import PropTypes from "prop-types";

const CloseBanner = ({ has_margin }) => (
  <div
    id="close_banner_container"
    className={`invisible ${has_margin ? "has_margin" : ""}`}
  >
      <div className="close_banner_text">
    <img
      src={it.url_for(`images/close-banner/icon_left.png`)}
      className="close_banner_img"
    />
      <div className='close_banner_text_wrapper'>
        <h3>Your Gaming Acount is scheduled to be closed</h3>
        <p>Please proceed to withdraw your funds.</p>
      </div>
      </div>
      <div className="close_banner_btn">{it.L("Learn more")}</div>
  </div>
);

CloseBanner.propTypes = {
  has_margin: PropTypes.bool,
};

export default CloseBanner;
