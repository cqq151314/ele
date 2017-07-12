// "use strict";
require('es6-promise').polyfill();
require('isomorphic-fetch');
class BsStore {
    getData(type){
        return  fetch(`shops/${typeof type !== 'undefined' ? '?type='+ type : ''}`);
    }
    getIDData(id){
        return  fetch(`/orders/${'?id='+ id}`);
    }
    getTypes(type2){
        return  fetch('types');
    }
    getKwordsData(keywords){
        return  fetch(`shops/${typeof keywords !== 'undefined' ? '?keywords='+ keywords : ''}`);
    }
    getOrder(_page,_limit){
        return  fetch(`orders/${'?_page='+ _page+'&_limit='+_limit}`);
    }
}
const bsStore = new BsStore();
export default bsStore;
