import  { dayTimeRange } from 'utils/dates';

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
