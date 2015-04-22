import { Lib } from './lib.js';
//this class contains the available routes
export default new class MenuLogic{
  constructor() {
      this.lib = new Lib();
  }
  activate(selection) {
      try {
          var sub = this.menu()[selection];
          if (sub) {
              var result = sub();
              if (result instanceof Promise) {
                  result.then(function() {
                        console.log('ASYNC LOAD: ' + selection);
                    });
              }else {
                  console.log('SYNC LOAD: ' + selection);
              }
          }
      } catch (e) {
          console.log('Could not find: ' + selection + ', error: ' + e);
      }
  }
  //the routes-table is dictionary
  menu() {
        return {
            'customers': () => {
                let panel = this.lib.getMainPanel();
                panel.setAttribute('display', 'block');
            },
            'tasks': () => {
                var options = { gridType: 'Angular',
                                gridSettings: null };
                this.lib.createAngularGrid(options);
            }
        };
    }
}
