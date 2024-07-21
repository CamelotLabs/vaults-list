require('dotenv').config()
const beefy = require("./vaults/beefy");
const defiedge = require("./vaults/defiedge");
const gamma = require("./vaults/gamma");
const jones = require("./vaults/jones");
const jonesLegacy = require("./vaults/jones-legacy");
const steer = require("./vaults/steer");

module.exports = buildList = () => {
    const vaults = [beefy(), defiedge(), gamma(), jones(), jonesLegacy(), steer()]

    return {
        name: "Camelot ALM Vaults",
        timestamp: new Date().toISOString(),
        vaults
    };
};