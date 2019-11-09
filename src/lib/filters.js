import * as Consts from './consts'
export const get_const_value = (key, const_key) => Consts[const_key][key]

import dayjs from 'dayjs'

export const price_format = val => parseFloat(val).toFixed(2) + '元'
export const time_format = val => dayjs(val).format('HH:mm:ss')
export const time_format_hm = val => dayjs(val).format('HH:mm')
export const date_format = val => dayjs(val).format('YYYY-MM-DD')

export const date_format_zh = val => dayjs(val).format('YYYY年MM月DD日')
export const add_date_format = (num, unit, val) =>
  dayjs(val)
    .add(num, unit)
    .format('YYYY-MM-DD')
export const subtract_date_format = (num, unit, val) =>
  dayjs(val)
    .subtract(num, unit)
    .format('YYYY-MM-DD')
export const hidePhone = val =>
  /^1\d{10}$/.test(val) ? val.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') : val
