const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Token contract', () => {
  let Token,token, owner, addr1, addr2;

  beforeEach(async () => {
    Token = await ethers.getContractFactory('Token');
    token = await Token.deploy();
    [owner, addr1, addr2, _] = await ethers.getSigners;
  })

  describe('Deployment', () => {
    it('Should set the right owner', async () => {
      expect(await token.owner()).to.equal(owner.address)
    })
  })
})
