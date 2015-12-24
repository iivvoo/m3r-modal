import Ember from 'ember';

export default Ember.Service.extend({
    approute: null,
    promise: null,
    showing: false,
    routename: 'application',
    outletname: 'modal',

    setApplicationRoute(approute, routename='application', outletname='modal') {
        this.set('approute', approute);
        this.set('routename', routename);
        this.set('outletname', outletname);
    },

    show(template, model) {
        if(this.get('showing')) {
            console.log("There's already a modal displaying!");
            return null;
        }
        this.set('showing', true);

        this.get('approute').render(template, {
            into: this.get('routename'),
            outlet: this.get('outletname'),
            model: model
        });
        let defer = Ember.RSVP.defer();
        this.set('defer', defer);
        return defer.promise;
    },
    close(res) {
        if(!this.get('showing')) {
            console.log('There is no modal to close!');
            return;
        }
        this.set('showing', false);
        this.get('approute').disconnectOutlet({
            outlet: this.get('outletname'),
            parentView: this.get('routename')
        });
        this.get('defer').resolve(res);
    }
});
