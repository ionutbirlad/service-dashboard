export const ORDER_BY_FILTER_VALUES = ['name', 'status', 'lastUpdated'] as const;
export type OrderByFilterValue = (typeof ORDER_BY_FILTER_VALUES)[number];
