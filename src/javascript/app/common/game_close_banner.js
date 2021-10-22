const getElementById = require('../../_common/common_functions').getElementById;

const CloseBanner = (() => {
    let el_close_banner_container;

    const onLoad = () => {
        el_close_banner_container = getElementById('close_banner_container');
        el_close_banner_container.setVisibility(1);

    };

    return { onLoad };

})();

module.exports = CloseBanner;
