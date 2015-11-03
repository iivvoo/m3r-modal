import Ember from 'ember';

export default Ember.Component.extend({
    show: function() {
        this.$('.modal').modal();
    }.on('didInsertElement'),

    hide: function() {
        this.$('.modal').modal('hide');
    }.on('willDestroyElement'),

    actions: {

        closeModal() {
            console.log("m3r-modal component show-debtor closeModal");
            this.get('close')();
        }
    }
});
