const csv = require("csvtojson/v2");

/**
 * Converts a CSV string to JSON
 * @public
 * @param {string} str CSV to be converted
 * @param {object} opts Options for xml2js parser
 * @returns {json}
 */

function csvToJson(str, opts = {}) {
  return new Promise((resolve, reject) => {
    csv(opts)
      .fromString(str)
      .then(
        json => {
          resolve(json);
        },
        err => {
          reject(err);
        }
      );
  });
}

module.exports = csvToJson;
