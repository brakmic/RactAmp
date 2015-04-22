let _ = require('underscore');
//this class contains a few helper methods for playing with DOM
export class Lib {

  constructor() {
      this.parentId   = 'main-panel';
      this.childClass = 'main-panel-child';
  }
  getMainPanel() {
      return document.getElementById(this.parentId);
  }
  createAngularGrid(options) {
      let angularApp;
      let gridId              = 'adv-angular-grid';
      let panel               = this.getMainPanel();
      this.removeByClassName();
      let ctrlElem            = document.createElement('div');
      ctrlElem.id             = 'adv-angular-app-node';
      ctrlElem.classList.add(this.childClass);
      ctrlElem.setAttribute('ng-controller', 'AngularGridCtrl as vm');
      let newGrid             = document.createElement('div');
      newGrid.id              = gridId;
      newGrid.setAttribute('angular-grid', 'vm.gridOptions');
      newGrid.classList.add('ag-fresh');
      panel.appendChild(ctrlElem);
      ctrlElem.appendChild(newGrid);
      angularApp              = modGrid.init(options);
  }
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
                  console.log('Removed existing widget instance: ' + widget.id);
              }
          });
      }
  }
  removeById(id) {
      let old = document.getElementById(id);
      if (old) {
          let parent = old.parentNode;
          parent.removeChild(old);
          console.log('Removed existing html element: ' + id);
      }
  }

}
