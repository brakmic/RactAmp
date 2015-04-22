let _ = require('underscore');
import DemoView from '../ui/demo-view.js';

//a few helper methods for playing with DOM
export default class Lib {

  constructor() {
      this.parentId   = 'main-panel';
      this.childClass = 'main-panel-child';
  }
  getMainPanel() {
      return document.getElementById(this.parentId);
  }
  //every page contains a table view with dynamically generated JSON data
  //more info: https://randomuser.me/documentation
  loadPage(pageName) {
      let mainPanel               = this.getMainPanel();
      //remove already existing tables & child panels in main panel
      this.removeByClassName();
      //create new child panel and table view
      let tableView = document.createElement('div');
      let childPanel = document.createElement('div');
      tableView.setAttribute('id', pageName);
      childPanel.classList.add(this.childClass);
      childPanel.classList.add('panel');
      //append to DOM
      childPanel.appendChild(tableView);
      mainPanel.appendChild(childPanel);
      //create a new Ractive
      return new DemoView(tableView.id);
  }
  //a simple clean-up method to remove existing elements from DOM
  removeByClassName(className) {
      var c            = className || this.childClass;
      var olderWidgets = document.getElementsByClassName(c);
      if (olderWidgets.length > 0) {
          _.each(olderWidgets, function(widget) {
              if (widget) {
                  if (widget.parentNode) {
                      widget.parentNode.removeChild(widget);
                  } else {
                      console.log('no parent node found, now removing by using a temp-DIV');
                      var tmp = document.createElement('div');
                      tmp.appendChild(widget);
                      tmp.removeChild(widget);
                  }
                  console.log('Removed: ' + widget.id);
              }
          });
      }
  }
  //direct removal by Id
  removeById(id) {
      let old = document.getElementById(id);
      if (old) {
          let parent = old.parentNode;
          parent.removeChild(old);
          console.log('Removed existing html element: ' + id);
      }
  }

}
