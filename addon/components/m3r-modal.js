import Ember from 'ember';
import layout from '../templates/components/m3r-modal';


export default Ember.Component.extend({
    modal: Ember.inject.service(),

    layout: layout,

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
