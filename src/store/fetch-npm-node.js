"use strict";
require('es6-promise').polyfill();
require('isomorphic-fetch');
var realFetch = require('node-fetch');
// module.exports = function(url, options) {
// 	if (/^\/\//.test(url)) {
// 		url = 'https:' + url;
// 	}
// 	return realFetch.call(this, url, options);
// };
//
// if (!global.fetch) {
// 	global.fetch = module.exports;
// 	global.Response = realFetch.Response;
// 	global.Headers = realFetch.Headers;
// 	global.Request = realFetch.Request;
// }

fetch('datapic.json').then(res => {res.json();console.log(res)})
    .then(data => console.log(data));
