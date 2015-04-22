//load global dependencies
export default new class GlobalInit {
    constructor() {
        //just a few helper-namespaces
        let app = window.app = window.app || {};
        app.ui = {
            elements: {}
        };
        app.tools = {
            lib: require('./lib')
        };
        app.defaults = {
            routing: {
                basePath: '/'  //for PageJS (http://visionmedia.github.io/page.js/)
            }
        };

        //grab the usual suspects
        window.$                          = window.jQuery = require('jquery');
        window.Ractive                    = require('ractive');
        //set debugging for RactiveJS
        window.Ractive.DEBUG              = /unminified/.test(function() {/*unminified*/});
        //let RactiveJS use AmpersandJS models
        //(see RactiveJS adaptors: http://docs.ractivejs.org/latest/adaptors)
        window.Ractive.adaptors.Ampersand = require('ractive-adaptors-ampersand');
        /* Bootstrap Scripts */
        require('bootstrap');
        /* Font Awesome Styles */
        /*require('font-awesome-webpack');
        require('font-awesome.css');*/
        console.log('deps loaded');
    }
}
