/**
 * Delay an async function
 * @public
 * @param {number} time Time in ms to delay
 */

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

module.exports = delay;
