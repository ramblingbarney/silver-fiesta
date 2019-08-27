import { module, test } from 'qunit';
import { click, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | add player', function(hooks) {
  setupApplicationTest(hooks);

  test('should add a new player', async function(assert) {
    await visit('/');
    await fillIn(document.querySelector('.player-input'), 'Tom');
    await click(document.querySelector('.btn-outline-success'));
    await visit('/leaderboard');
    assert.equal(document.querySelectorAll('ul#nav-leaderboard li').length, 2);
  });

  test('added player should appear in player dropdown', async function(assert) {
    await visit('/');
    await fillIn(document.querySelector('.player-input'), 'Tom');
    await click(document.querySelector('.btn-outline-success'));
    await click(document.querySelector('#select-option-player-one'));
    assert.equal(document.querySelector('#select-option-player-one').outerHTML, '<select id="select-option-player-one">[object HTMLSelectElement]<option value="0">computer</option><option value="1">Tom</option></select>');
  });
});
