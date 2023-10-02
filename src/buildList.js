const defiedge = require("./vaults/defiedge.json");
const gamma = require("./vaults/gamma.json");

module.exports = function buildList() {
    return {
        name: "Camelot Vaults",
        timestamp: new Date().toISOString(),
        vaults: [defiedge, gamma]
    };
};