export const isString = (value: any): value is string => typeof value === 'string'
export const isNumber = (value: any): value is number => typeof value === 'number'
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'
export const isUndefined = (value: any): value is undefined => value === undefined
export function isStringNumber(value: any): value is string {
  return isString(value) && !Number.isNaN(Number(value))
}

export function isObject(value: any): value is Record<any, any> {
  return value !== null && typeof value === 'object'
}
