import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Serializer | starships', function() {
  setupTest();

  // Replace this with your real tests.
  it('exists', function() {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('starships');

    expect(serializer).to.be.ok;
  });

  it('serializes records', function() {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('starships', {});

    let serializedRecord = record.serialize();

    expect(serializedRecord).to.be.ok;
  });
});
