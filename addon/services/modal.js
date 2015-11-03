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
            console.log('Already showing modal!');
            return;
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
    close() {
        if(!this.get('showing')) {
            console.log('Not showing modal!');
            return;
        }
        this.set('showing', false);
        this.get('approute').disconnectOutlet({
            outlet: this.get('outletname'),
            parentView: this.get('routename')
        });
        this.get('defer').resolve();
    }
});
