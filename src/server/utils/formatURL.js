/**
 * @description Method to format string with given values
 * @param {String} str Value to be formatted
 * @param {[Object]} args multiple parameters Object with the value to format
 * @example format('this {0} an {1}', 'is', 'example') => 'this is an example'
 */
function format(str, ...args) {
  return str.replace(/{(\d+)}/g, (match, number) =>
    typeof args[number] !== 'undefined' ? args[number] : match,
  );
}

export default format;
