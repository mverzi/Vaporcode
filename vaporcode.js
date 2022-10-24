/**
 * This function converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character)
 * @param {*} string The sentence to be converted
 * @returns The converted string
 */
function vaporcode(string) {
    return string.toUpperCase().replace(/\s/g, '').split('').join('  ')
  }