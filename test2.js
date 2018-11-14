var url = require('url');
var targetUrl = 'https://www.youtube.com/watch?v=RtOSw8TLCtQ&list=PLG7te9eYUi7tHH-hJ2yzBJ9h6dwBu1FUy&index=15';

var urlObj = url.parse(targetUrl);
console.dir(urlObj);

var urlStr = url.format(urlObj);
console.log(urlStr);

var urlQuery = urlObj.query;
console.log(urlQuery);

var queryString = require('querystring');
console.dir(queryString.parse(urlObj.query));