const getElementById = require('../../_common/common_functions').getElementById;
const BinarySocket = require('../base/socket');
const isEuCountry   = require('../common/country_base').isEuCountry;

const EuCloseBanner = (() => {
    let el_close_banner_container, el_gaming_popup, el_learn_more;
    const onLoad = () => {
        BinarySocket.wait('authorize', 'website_status', 'landing_company').then(() => {
            if (isEuCountry()) {
                el_gaming_popup = getElementById('eu-close-popup');
                el_close_banner_container = getElementById('eu_close_banner_container');
                el_close_banner_container.setVisibility(1);
                el_learn_more = getElementById('eu_close_banner_btn');
            }
            el_gaming_popup.setVisibility(0);
            el_learn_more.addEventListener('click', onShowPopup);
        });

    };

    const onShowPopup = () => {
        el_gaming_popup.setVisibility(1);
        const el_top_bar = getElementById('topbar');
        el_top_bar.style.zIndex = 0;
        document.body.style.overflow = 'hidden';
    };

    return { onLoad, onShowPopup };

})();

module.exports = EuCloseBanner;
