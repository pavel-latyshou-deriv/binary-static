const getElementById = require('../../_common/common_functions').getElementById;

const CloseBanner = (() => {
    let el_close_banner_container;
    let el_close_banner_container, el_gaming_popup, el_learn_more, el_accept_btn;

    const onLoad = () => {
        el_close_banner_container = getElementById('close_banner_container');
        el_close_banner_container.setVisibility(1);
        el_gaming_popup = getElementById('gaming-close-popup');
        el_gaming_popup.setVisibility(0);
        el_learn_more = getElementById('close_banner_btn');
        el_learn_more.addEventListener('click', onShowPopup);
        el_accept_btn.getElementById('accept-btn');
        el_accept_btn.addEventListener('click', onClosePopup);
    };

    const onShowPopup = () => {
        el_gaming_popup.setVisibility(1);
    };

    const onClosePopup = () => {
        el_gaming_popup.setVisibility(0);
    };

    return { onLoad, onShowPopup, onClosePopup };

})();

module.exports = CloseBanner;
