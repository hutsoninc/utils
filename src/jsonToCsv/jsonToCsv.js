const Json2csvParser = require("json2csv").Parser;

/**
 * Converts a JSON object to CSV
 * @public
 * @param {object} json JSON to be converted
 * @param {array} fields Fields to be used for headers
 * @returns {string}
 */

function jsonToCsv(json, fields) {
  if (!fields || !Array.isArray(fields)) {
    throw new Error("An array of fields must be provided.");
  }
  const json2csvParser = new Json2csvParser({ fields });
  return json2csvParser.parse(json);
}

module.exports = jsonToCsv;
