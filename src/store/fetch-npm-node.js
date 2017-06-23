// "use strict";
require('es6-promise').polyfill();
require('isomorphic-fetch');
var realFetch = require('node-fetch');
    class BsStore {
       getData(id){
          return  fetch(`shops/${typeof id !== 'undefined' ? '?id='+ id : ''}`);
       }
    }
    const bsStore = new BsStore();
    export default bsStore;
