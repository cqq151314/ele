// "use strict";
require('es6-promise').polyfill();
require('isomorphic-fetch');
class BsStore {
    getData(type){
        return  fetch(`shops/${typeof type !== 'undefined' ? '?type='+ type : ''}`);
    }
    getTypes(type2){
        return  fetch('types');
    }
    getKwordsData(keywords){
        return  fetch(`shops/${typeof keywords !== 'undefined' ? '?keywords='+ keywords : ''}`);
    }
    getOrder(pageSize,currentPage){
        return  fetch(`shops/${'?pageSize='+ pageSize+'&currentPage='+currentPage}`);
    }
}
const bsStore = new BsStore();
export default bsStore;
