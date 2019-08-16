import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Model | people', function() {
  setupTest();

  // Replace this with your real tests.
  it('exists', function() {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('people', {});
    expect(model).to.be.ok;
  });
});
