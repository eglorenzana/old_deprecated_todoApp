import  { dayTimeRange, filterByDateRange, isDateInRange } from 'utils/dates';

const filterOptions = {
  today: {
    label: 'Today',
    filterPropertiesGetter: function() {
      const today = new Date();
      return dayTimeRange(today);
    }
  },
  tomorrow: {
    label: 'Tomorrow',
    filterPropertiesGetter: function() {
      const today = new Date();
      return dayTimeRange(today, 1);
    }
  },
  someday: {
    label: 'Some day',
    filterPropertiesGetter: function() {
      const today = new Date();
      const someDay = dayTimeRange(today, 2);
      return {
        startDate: someDay.startDate,
        endDate: undefined
      };
    }
  },
  completed: {
    label: 'Completed',
    filterPropertiesGetter: function() {
      const today = new Date();
      const todayRange = dayTimeRange(today);
      return {
        completed: true,
        endDate: todayRange.startDate,
        startDate: undefined,
      }
    }
  },
]

export const menuItemsKeys = [
  'today',
  'tomorrow',
  'someday',
  'completed',
];

export const menuItems = menuItemsKeys.map(key => ({ ...filterOptions[key], key });

function compareCompleted(completedValue) {
    if (completedValue === undefined ) {
        return function(){ return true; };
    }
    return function(todo) {
        completedValue == todo.completed;
    }
}


function filterTodos(list, startDate, endDate, others = {}) {
    const completeFilter = compareCompleted(others.completed);
    return list.filter(todo => {
        return (
            completeFilter(todo) &&
            isDateInRange(todo.date, startDate, endDate)
        );
    })
}

export function filterTodoItems(list, filterObject = {}) {
    const {
        startDate,
        endDate,
        ...others
    } = filterObject;
    const filter = Object.keys(others).length ? filterTodos : filterByDateRange;
    return filter(list, startDate, endDate, others);
}
