import Route from '@ember/routing/route';

export default Route.extend({
  // if(not-logged-in)
    beforeModel() {
      this.transitionTo('account.login');
    }
  // }
});
