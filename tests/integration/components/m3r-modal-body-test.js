import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('m3r-modal-body', 'Integration | Component | m3r modal body', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{m3r-modal-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#m3r-modal-body}}
      template block text
    {{/m3r-modal-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
