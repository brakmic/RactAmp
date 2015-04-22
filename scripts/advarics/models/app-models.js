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

export {
            MenuModel as MenuModel,
            MenuCollection as MenuCollection
        };
