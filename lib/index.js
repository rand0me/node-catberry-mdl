import mdl from 'material-design-lite/material';

export default {

  /**
   * Register catberry-mdl module
   * @param locator {locator} - Catberry service locator
   */
  register(locator) {
    locator.registerInstance('mdl', mdl);
  },

  /**
   * Exported module
   */
  mdl
};
