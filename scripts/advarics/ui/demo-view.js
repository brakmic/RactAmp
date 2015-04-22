let Ractive    = require('ractive');
let $          = require('jquery');
let _          = require('underscore');
let cuid       = require('cuid');
//get random images from robohash
let robohash   = 'http://www.robohash.org/ractamp_';
let imgSize    = '?size=65x65';
//random user data web service
let randomuser = 'http://api.randomuser.me/?format=json&results=10';

//JSON data is completely lowercased
let capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//a simple toaster
let toast = (message) => {
    let toaster = $(`<div><h3>${message}</h3></div>`);
    toaster.css({
        border: 'dotted',
        display: 'block',
        background: 'cyan',
        opacity: 0.70,
        position: 'fixed',
        padding: '7px',
        'text-align': 'center',
        height: '80px',
        width: '200px',
        left: ($(window).width() - 284) / 2,
        top: $(window).height() / 2 - 20
    });
    toaster.appendTo('#main-panel').delay(200);
    toaster.stop().fadeIn(400).delay(3000);
    return toaster;
}

export default class DemoView {
  //initialize a new Ractive by providing a template and "el"
  //"el" can be an ID, or class etc.
  //"data" contains contextual information used by Ractive to populate views
  //it is recommended to define "data" as a function and not as an object literal
  //in this case we provide "data" with some predefined structure (table headers)
  //and some asynchronously retrieved data (table rows containing user data and images)
  //In such cases the "data" should populate itself by using Ractive's "set" method.
  //More info on "asynchronous data": http://docs.ractivejs.org/latest/advanced-configuration
  constructor(el) {
      this.instance = new Ractive({
          el: el,
          template: require('./t-table-view.html'),
          data: function() {
              //instead of returning some predefined data we get ours from
              //a free web service at https://randomuser.me
              let self = this;
              //async request begin
              self.toaster = toast('Loading data...');
              $.get(randomuser)
                    .then(function(response) {
                        let _self;
                        let users = [];
                        _.each(response.results, function(val, idx) {
                            users.push({
                                id: idx,
                                image: robohash + cuid() + imgSize,
                                first: capitalize(val.user.name.first),
                                last:  capitalize(val.user.name.last),
                                email: capitalize(val.user.email),
                                city:  capitalize(val.user.location.city),
                                state: capitalize(val.user.location.state)
                            });
                            //async request end
                            self.toaster.fadeOut(400, function() {
                                              $(this).remove();
                                          });
                            //populate data.rows
                            self.set('rows', users);
                        });
                    });
              //headers are set by default
              return {
                  entries: {
                      headers: [
                        'Picture',
                        'First Name',
                        'Last Name',
                        'E-Mail',
                        'City',
                        'State'
                      ]
                  }
              }
          }
      });
   }
}
