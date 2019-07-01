const xml2js = require("xml2js");

/**
 * Converts a XML string to JSON
 * @public
 * @param {string} xml XML to be converted
 * @param {object} opts Options for xml2js parser
 * @returns {json}
 */

function xmlToJson(xml, opts = {}) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, opts, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
}

module.exports = xmlToJson;
