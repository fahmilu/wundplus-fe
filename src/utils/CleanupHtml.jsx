/**
 * Removes all <p> tags from HTML text while preserving the content inside
 * @param {string} htmlText - The HTML text containing <p> tags
 * @returns {string} - Text with <p> tags removed
 */
export const clearPTags = (htmlText) => {
  if (!htmlText || typeof htmlText !== 'string') {
    return '';
  }
  
  // Remove opening <p> tags (with any attributes)
  let cleanedText = htmlText.replace(/<p[^>]*>/gi, '');
  
  // Remove closing </p> tags
  cleanedText = cleanedText.replace(/<\/p>/gi, '');
  
  return cleanedText;
};

/**
 * Removes all HTML tags from text, keeping only the text content
 * @param {string} htmlText - The HTML text
 * @returns {string} - Plain text with all HTML tags removed
 */
export const stripAllHtmlTags = (htmlText) => {
  if (!htmlText || typeof htmlText !== 'string') {
    return '';
  }
  
  // Remove all HTML tags
  return htmlText.replace(/<[^>]*>/g, '');
};

/**
 * Removes specific HTML tags from text
 * @param {string} htmlText - The HTML text
 * @param {string[]} tagsToRemove - Array of tag names to remove (e.g., ['p', 'div', 'span'])
 * @returns {string} - Text with specified tags removed
 */
export const removeSpecificTags = (htmlText, tagsToRemove = []) => {
  if (!htmlText || typeof htmlText !== 'string') {
    return '';
  }
  
  if (!Array.isArray(tagsToRemove) || tagsToRemove.length === 0) {
    return htmlText;
  }
  
  let cleanedText = htmlText;
  
  tagsToRemove.forEach(tag => {
    // Remove opening tags with any attributes
    const openTagRegex = new RegExp(`<${tag}[^>]*>`, 'gi');
    cleanedText = cleanedText.replace(openTagRegex, '');
    
    // Remove closing tags
    const closeTagRegex = new RegExp(`</${tag}>`, 'gi');
    cleanedText = cleanedText.replace(closeTagRegex, '');
  });
  
  return cleanedText;
};

export default {
  clearPTags,
  stripAllHtmlTags,
  removeSpecificTags
};
