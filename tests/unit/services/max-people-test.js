import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | some thing', function(hooks) {
  setupTest(hooks);

  test('should return the total figure of 88', function(assert) {
    const service = this.owner.lookup('service:max-people');

    assert.equal(service.calc(), 88);
  });
});
