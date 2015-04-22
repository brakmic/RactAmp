import Lib from './lib';

export default new class MenuLogic{
  constructor() {
      this.lib = new Lib();
  }
  activate(selection) {
      try {
          this.lib.loadPage(selection);
      } catch (e) {
          console.log('Could not find: ' + selection + ', error: ' + e);
      }
  }
}
