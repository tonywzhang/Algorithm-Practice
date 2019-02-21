# Encoding and DeCoding URLs

Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

```
let urls = new Map();

var encode = function(longUrl) {
    // console.log(urls);
    let uniqueKey = Date.now().toString(36);
    urls.set(uniqueKey, longUrl);
    return "http://tinyurl.com/" + uniqueKey;
};




/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    // console.log(urls);
    // console.log([shortUrl.split("com/")[1]][0]);
    return urls.get([shortUrl.split("com/")[1]][0]);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
```
