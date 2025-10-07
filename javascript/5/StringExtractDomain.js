/**
 * Extracts the domain name from a URL string
 * @param {string} url - the URL to parse
 * @returns {string} the domain name without protocol, www, or path
 * Time complexity: O(n) - where n is the length of the URL
 * Space complexity: O(1) - constant space
 * 
 * Examples:
 * domainName("http://github.com/carbonfive/raygun") -> "github"
 * domainName("http://www.zombie-bites.com") -> "zombie-bites"
 * domainName("https://www.cnet.com") -> "cnet"
 * domainName("www.xakep.ru") -> "xakep"
 * domainName("https://youtube.com") -> "youtube"
 */
const domainName = url => {
    let domain = url.replace(/^https?:\/\//, ''); // Remove protocol (http:// or https://)
    domain = domain.replace(/^www\./, '');        // Remove www. prefix if present    
    const match = domain.match(/^([^./]+)/);      // Extract domain name (everything before the first dot or slash)
    
    return match ? match[1] : '';
};
/**
 * Alternative implementation using sequential string replacements
 * @param {string} url - the URL to parse
 * @returns {string} the domain name without protocol, www, or path
 * Time complexity: O(n) - where n is the length of the URL
 * Space complexity: O(1) - constant space
 * 
 * This approach uses multiple replace() calls to remove:
 * 1. "https://" protocol
 * 2. "http://" protocol  
 * 3. "www." prefix
 * Then splits by '.' and takes the first part
 * 
 * Note: This method is less efficient as it makes multiple passes over the string
 * and doesn't handle edge cases as robustly as regex
 */
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

/**
 * One-liner implementation using complex regex
 * @param {string} url - the URL to parse
 * @returns {string} the domain name without protocol, www, or path
 * Time complexity: O(n) - where n is the length of the URL
 * Space complexity: O(1) - constant space
 * 
 * This regex pattern:
 * - .+\/\/ matches everything up to and including "://" (protocol)
 * - www. matches "www." prefix
 * - \..+ matches everything from the first dot onwards (domain extension and path)
 * 
 * The 'g' flag ensures all matches are replaced globally
 * This is the most concise but also the most complex to understand
 */
function domainName(url){  
    return url.replace(/.+\/\/|www.|\..+/g, '')
}