import createHomepage from './homepage';
import createTabs from './index';

function pageLoad() {
    createTabs();
    createHomepage();
}

export default pageLoad;