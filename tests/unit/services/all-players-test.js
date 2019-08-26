import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | all-players', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('should return the default computer player', function(assert) {
    let service = this.owner.lookup('service:all-players');
    let testDefaultPlayer = { name: 'computer', score: 0 };
    let serviceDefaultPlayer = service.testMethod();
    assert.strictEqual(serviceDefaultPlayer.name, testDefaultPlayer.name);
    assert.strictEqual(serviceDefaultPlayer.score, testDefaultPlayer.score);
  });
});
