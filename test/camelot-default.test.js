const packageJson = require('../package.json');
const schema = require('../src/vaultslist.schema.json');
const { expect } = require('chai');
const { getAddress } = require('@ethersproject/address');
const Ajv = require('ajv');
const buildList = require('../src/buildList');

const ajv = new Ajv({ allErrors: true, format: 'full' });
const validator = ajv.compile(schema);
let vaultsData;

before(async function () {
  vaultsData = await buildList();
});

describe('buildList', () => {
  it('schema is valid', () => {
    expect(validator(vaultsData)).to.equal(true);
  });

  it('contains no duplicate ids', () => {
    const map = {};
    for (let protocol of vaultsData.vaults) {
      const key = protocol.name.toLowerCase();
      expect(typeof map[key])
          .to.equal('undefined', `duplicate name: ${protocol.name}`);
      map[key] = true;
    }
  })

  it('contains no duplicate chains', () => {
    const map = {};
    for (let protocol of vaultsData.vaults) {
      for (let chain of protocol.chains) {
        const key = `${protocol.name.toLowerCase()}-${chain.chainId}`;
        expect(typeof map[key])
            .to.equal('undefined', `duplicate chainId for ${protocol.name.toLowerCase()}: ${chain.chainId}`);
        map[key] = true;
      }
    }
  })

  it('contains no duplicate strategies', () => {
    const map = {};
    for (let protocol of vaultsData.vaults) {
      for (let chain of protocol.chains) {
        for (let strategy of chain.strategies) {
          const key = strategy.vaultAddress;
          expect(typeof map[key])
              .to.equal('undefined', `duplicate strategy: ${strategy.vaultAddress}`);
          map[key] = true;
        }
      }
    }
  })

  it('proxyHelper addresses are valid and checksummed', () => {
    for (let protocol of vaultsData.vaults) {
      for (let chain of protocol.chains) {
        expect(getAddress(chain.proxyHelperAddress)).to.eq(chain.proxyHelperAddress);
      }
    }
  });

  it('strategy addresses are valid and checksummed', () => {
    for (let protocol of vaultsData.vaults) {
      for (let chain of protocol.chains) {
        for (let strategy of chain.strategies) {
          expect(getAddress(strategy.vaultAddress)).to.eq(strategy.vaultAddress);
          expect(getAddress(strategy.poolAddress)).to.eq(strategy.poolAddress);
        }
      }
    }
  })
});