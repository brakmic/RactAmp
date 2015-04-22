var cssify = require('cssify');
var load = require('ractive-load');
//load global dependencies
export default new class GlobalInit {
    constructor() {
        //a few global-namespaces
        let app = window.app = window.app || {};
        app.ui = {
            elements: {}
        };
        app.tools = {};
        app.defaults = {
            routing: {
                basePath: '/RactAmp'  //for PageJS (http://visionmedia.github.io/page.js/)
            }
        };

        //grab the usual suspects
        window.$                          = window.jQuery = require('jquery');
        window.Ractive                    = require('ractive');
        window.Ractive.load               = load;
        //set debugging for RactiveJS
        window.Ractive.DEBUG              = /unminified/.test(function() {/*unminified*/});
        //let RactiveJS use AmpersandJS models via adapter
        //more info: http://docs.ractivejs.org/latest/adaptors
        window.Ractive.adaptors.Ampersand = require('ractive-adaptors-ampersand');
        /* Bootstrap Styles via CDN */
        cssify.byUrl('//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css');
        require('bootstrap');
    }
}
