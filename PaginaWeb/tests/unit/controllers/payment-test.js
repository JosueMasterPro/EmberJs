import { module, test } from 'qunit';
import { setupTest } from 'paginaweb/tests/helpers';

module('Unit | Controller | payment', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:payment');
    assert.ok(controller);
  });
});
