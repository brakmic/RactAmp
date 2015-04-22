let Ractive = require('ractive');
let html = require('./t-menu.js');
import models from '../models/app-models.js';
//menu structure used by the Ractive-menu component
let data = {
                menus: [
                new models.MenuModel(
                    {
                    id: 'adv-menu-management',
                    caption: 'Management',
                    classAttr: 'glyphicon glyphicon-cog',
                    visible: true,
                    entries: [
                            {
                                id: 'customers',
                                caption: 'Customers',
                                classAttr: 'glyphicon glyphicon glyphicon-user',
                                path: 'customers',
                                visible: true
                            },
                            {
                                id: 'clients',
                                caption: 'Clients',
                                classAttr: 'glyphicon glyphicon glyphicon-scale',
                                path: 'clients',
                                visible: true
                            },
                            {
                                id: 'revenues',
                                caption: 'Revenues',
                                classAttr: 'glyphicon glyphicon-euro',
                                path: 'revenues',
                                visible: true
                            }
                        ]
                }),
                new models.MenuModel({
                    id: 'adv-menu-articles',
                    caption: 'Products',
                    classAttr: 'glyphicon glyphicon-barcode',
                    visible: true,
                    entries: [
                        {
                            id: 'products',
                            caption: 'Products',
                            classAttr: 'glyphicon glyphicon-book',
                            path: 'products',
                            visible: true
                        },
                        {
                            id: 'tasks',
                            caption: 'Tasks',
                            classAttr: 'glyphicon glyphicon-tasks',
                            path: 'tasks',
                            visible: true
                        },
                        {
                            id: 'licenses',
                            caption: 'Licenses',
                            classAttr: 'glyphicon glyphicon-stats',
                            path: 'licenses',
                            visible: true
                        }
                    ]
                }),
                new models.MenuModel({
                    id: 'adv-menu-tools',
                    caption: 'Tools',
                    classAttr: 'glyphicon glyphicon-wrench',
                    visible: true,
                    entries: [
                        {
                            id: 'retail',
                            caption: 'Diagnose',
                            classAttr: 'glyphicon glyphicon-list-alt',
                            path: 'emretail',
                            visible: true
                        },
                        {
                            id: 'log',
                            caption: 'Log',
                            classAttr: 'glyphicon glyphicon-pencil',
                            visible: true
                        }
                    ]
                })
            ]
            };

export default class MainPage {
  constructor() {
      this.app = window.app || {};
      this.instance = {};
      this.Menu = this.define(html);
      Ractive.components['Menu'] = this.Menu;
      this.init('left-menu-acc', data);
  }
  init(el = 'body', data = {}) {
      return new this.Menu({
          el,
          data, //defined as Ampersand-models in models/app-models.js
          adapt: ['Ampersand']  //we need the Ampersand-Model-adapter
      })
  }
  define(template) {
      return Ractive.extend({
          template
      });
  }
}
