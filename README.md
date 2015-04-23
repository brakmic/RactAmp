**RactiveJS + AmpersandJS**

This demo shows how to utilize RactiveJS views and components together with AmpersandJS models.

At <a href="http://www.advarics.net" target="_blank">advarics GmbH</a> we use both of them to develop our internal
tools and customer services.


As a performant view layer Ractive lets you decide how and by using which of the available "frameworks"
you're gonna control backend logic. And as a "non-frameworky framework" AmpersandJS is, IMHO, an ideal
choice when one wants to utilize only certain parts of a (probably) much bigger machinery to solve discrete problems.

*Info on Ractive elements*

This demo comprises of three Ractive <a href="https://github.com/ractivejs/component-spec" target="_blank">components</a>

a) Footer

b) Sidebar Menu

c) Main Panel

There's a fourth Ractive element which is not a component but rather a "normal" <a href="http://docs.ractivejs.org/latest/get-started" target="_blank">Ractive</a>.
Its tasks are creating html-tables and asynchronous communication with two web-services:

a) http://www.robohash.org

b) http://api.randomuser.me

*Info on Ampersand elements*

The logical structure of the sidebar menu is based on AmpersandJS <a href="https://github.com/AmpersandJS/ampersand-model" target="_blank">models</a>.
The component template *t-menu.ract* in *scripts/advarics/ui* contains the model structure of the sidebar menu.
The model definitions are in *scripts/models/adv-models.js*

```javascript
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
```
*Screenshot*

<img src="http://n71.imgup.net/mainpagea84b.png"/>

*Video*

<a href="http://www.youtube.com/watch?feature=player_embedded&v=B4eFRskseCM" target="_blank">
<img src="http://img.youtube.com/vi/B4eFRskseCM/0.jpg" alt="RactiveJS and AmpersandJS"
width="240" height="180" border="10" /></a>

**License**

MIT