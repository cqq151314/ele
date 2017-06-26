// "use strict";
require('es6-promise').polyfill();
require('isomorphic-fetch');
var realFetch = require('node-fetch');
class BsStore {
    getData(type){
        return  fetch(`shops/${typeof type !== 'undefined' ? '?type='+ type : ''}`);
    }
    getTypes(type2){
        return  fetch('types');
    }
}

const bsStore = new BsStore();
export default bsStore;
