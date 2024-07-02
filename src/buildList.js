require('dotenv').config()
const beefy = require("./vaults/beefy.json");
const defiedge = require("./vaults/defiedge.json");
const gamma = require("./vaults/gamma.json");
const jones = require("./vaults/jones.json");
const steer = require("./vaults/steer.json");

const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

module.exports = function buildList() {
    const vaults = [beefy, defiedge, gamma, jones, steer]
    const processedVaults = JSON.parse(JSON.stringify(vaults).replace(/BASE_URL/g, BASE_URL))

    return {
        name: "Camelot ALM Vaults",
        timestamp: new Date().toISOString(),
        vaults: processedVaults
    };
};