const prefixForNetwork = require('./prefix-for-network')
  
module.exports = function (hash, network) {
  const prefix = prefixForNetwork(network)
  return `https://ubiqscan.io/token/${hash}?node=${prefix}`
}

