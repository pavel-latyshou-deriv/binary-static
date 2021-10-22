const getElementById = require('../../_common/common_functions').getElementById;

const ClosePopup = (() => {
    let el_gaming_popup, el_accept_btn;

    const onLoad = () => {
        el_gaming_popup = getElementById('gaming-close-popup');
        el_accept_btn.getElementById('accept-btn');
        el_accept_btn.addEventListener('click', onClosePopup);
    };

    const onClosePopup = () => {
        el_gaming_popup.setVisibility(0);
    };

    return { onLoad, onClosePopup };

})();

module.exports = ClosePopup;
