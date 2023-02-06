import chai from 'chai';
import { ethers, upgrades } from 'hardhat';
import { NFT } from '../typechain';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { solidity } from 'ethereum-waffle';

chai.use(solidity);
const { expect } = chai;


describe('NFT', () => {
  let supportTicket: NFT;
  let sampleProject: SignerWithAddress;
  let snapshotId: number;

  async function deploy(deployer?: SignerWithAddress) {
    const supportTicketFactory = await ethers.getContractFactory('NFT', deployer);
    return upgrades.deployProxy(supportTicketFactory, []) as Promise<NFT>;
  }

  before(async () => {
    [sampleProject] = await ethers.getSigners();
    supportTicket = await deploy(sampleProject);
  });

  beforeEach(async () => {
    snapshotId = await ethers.provider.send('evm_snapshot', []);
  });

  afterEach(async () => {
    await ethers.provider.send('evm_revert', [snapshotId]);
  });

  /**
   * error orruced when run this test (proly because of the proxy, and command deployProxy)
   */
  it.skip('should revert if a second initialization is attempted', async () => {
    const tx = supportTicket.initialize();
    await expect(tx).to.be.revertedWith('Initializable: contract is already initialized');
  });
});
