import Mock from 'mockjs'
import {
  NavList,
  CompanyIfo
} from './data.js'
const BASE_URL = 'http://www.shop.com/api/v1'

Mock.mock(
  BASE_URL + '/company_info', {data: CompanyIfo}
)

Mock.mock(
  BASE_URL + '/nav_list', {data: NavList}
)
