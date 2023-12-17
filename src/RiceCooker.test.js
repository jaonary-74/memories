const { expect } = require('chai');
const sinon = require('sinon');
const promptSync = require('prompt-sync');
const myModule = require('./service/module');
const RiceCooker = require('./RiceCooker');

describe('Rice Cooker Program', () => {
  let consoleLogSpy;
  let promptStub;

  before(() => {
    consoleLogSpy = sinon.spy(console, 'log');
    promptStub = sinon.stub(promptSync, 'prompt');
  });

  after(() => {
    consoleLogSpy.restore();
    promptStub.restore();
  });

  beforeEach(() => {
    consoleLogSpy.resetHistory();
    promptStub.reset();
  });

  it('should branch the rice cooker', () => {
    promptStub.returns('1');
    const riceCooker = new RiceCooker();
    riceCooker.run();
    sinon.assert.calledWith(consoleLogSpy, '\nRice Cooker branché\n');
    expect(riceCooker.isPlugged).to.be.true;
  });

  it('should put rice in the rice cooker', () => {
    promptStub.returns('2');
    const riceCooker = new RiceCooker();
    riceCooker.run();
    sinon.assert.calledWith(consoleLogSpy, '\nRice Cooker prêt!\n');
    expect(riceCooker.isEmpty).to.be.false;
  });

  it('should switch on the rice cooker', () => {
    promptStub.returns('3');
    const riceCooker = new RiceCooker();
    riceCooker.run();
    sinon.assert.calledWith(consoleLogSpy, '\nRice Cooker allumé!\n');
    expect(riceCooker.isCooking).to.be.true;
  });

  it('should switch off the rice cooker', () => {
    promptStub.returns('4');
    const riceCooker = new RiceCooker();
    riceCooker.run();
    sinon.assert.calledWith(consoleLogSpy, '\nRice Cooker éteint!\n');
    expect(riceCooker.isCooking).to.be.false;
  });

  it('should empty the rice cooker', () => {
    promptStub.returns('5');
    const riceCooker = new RiceCooker();
    riceCooker.run();
    sinon.assert.calledWith(consoleLogSpy, '\nVotre rice cooker est vide, mettez quelque chose à cuire !\n');
    expect(riceCooker.isEmpty).to.be.true;
  });

  it('should unplug the rice cooker', () => {
    promptStub.returns('6');
    const riceCooker = new RiceCooker();
    riceCooker.run();
    sinon.assert.calledWith(consoleLogSpy, '\nRice Cooker débranché!\n');
    expect(riceCooker.isPlugged).to.be.false;
  });

  it('should quit the program', () => {
    promptStub.returns('7');
    const riceCooker = new RiceCooker();
    riceCooker.run();
    sinon.assert.calledWith(consoleLogSpy, 'Au revoir !');
  });
});