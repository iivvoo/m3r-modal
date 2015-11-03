import Ember from 'ember';

export default Ember.Component.extend({
    modal: Ember.inject.service(),

    show: function() {
        this.$('.modal').modal();
    }.on('didInsertElement'),

    hide: function() {
        this.$('.modal').modal('hide');
    }.on('willDestroyElement'),

    actions: {
        closeModal() {
            this.get('modal').close();
        }
    }
});
