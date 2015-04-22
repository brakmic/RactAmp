//menu structures
var Collection  = require('ampersand-collection');
var AmpersandModel = require('ampersand-model');

var MenuCollection = Collection.extend({
    model: MenuModel
});

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

export default {
            MenuModel              : MenuModel,
            MenuCollection         : MenuCollection
        };
