import Ember from 'ember';
import layout from '../templates/components/m3r-modal-buttons';

export default Ember.Component.extend({
    modal: Ember.inject.service(),

    layout: layout,

    actions: {
        closeModal() {
            this.get('modal').close('close');
        },
        ok() {
            this.get('modal').close('ok');
        }
    }
});


