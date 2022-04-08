import ajax from './ajax'

const BASE_URL = 'http://www.shop.com/api/v1'
export const reqGetCompanyInfo = () => ajax(BASE_URL + '/company_info')
export const reqGetNavList = () => ajax(BASE_URL + '/nav_list')
