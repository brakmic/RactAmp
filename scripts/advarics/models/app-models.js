var Collection  = require('ampersand-collection');
var AmpersandModel = require('ampersand-model');

//define a collection of menus
var MenuCollection = Collection.extend({
    model: MenuModel
});
//define a menu model which can contain
//other menu models packed in collections
var MenuModel = AmpersandModel.extend({
    props: {
        id        : 'string',
        caption   : 'string',
        classAttr : 'string',
        path      : 'string',
        visible   : {
            type    : 'boolean',
            default : false
        }
    },
    collections: {
        entries: MenuCollection
    }
});
//a collection of users
var UserCollection = Collection.extend({
    model: UserModel
});
//user model
var UserModel = AmpersandModel.extend({
    props: {
        id: 'number',
        image: 'string',
        first: 'string',
        last:  'string',
        email: 'string',
        city:  'string',
        state: 'string'
    },
    derived: {
        fullName: {
            deps: ['first', 'last'],
            fn: function() {
                return this.first + ' ' + this.last;
            }
        }
    }
});

export {
            MenuModel,
            MenuCollection,
            UserModel,
            UserCollection
        };
