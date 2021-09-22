import { Machine } from 'xstate';

export const selectMachine = Machine({
  id: 'select',
  initial: 'unselected',
  states: {
    unselected: {
      on: { 
        SELECT: 'selected',
        UNSELECT: { internal:true, target:'unselected' },
        TOGGLE: 'selected'
      }
    },
    selected: {
      on: { 
        SELECT: { internal:true, target:'selected'},
        UNSELECT: 'unselected' ,
        TOGGLE: 'unselected' 
      }
    }
  }
});
