import {
  reqGetNavList,
  reqGetCompanyInfo
} from '../api/index'
import {
  STORE_NAV_LIST,
  STORE_COMPANY_INFO
} from './mutation-types'
export default
{
  async getCompanyInfo ({commit, state}) {
    const resrult = await reqGetCompanyInfo()
    commit(STORE_COMPANY_INFO, {companyInfo: resrult.data})
  },

  async getNavList ({commit, state}) {
    const resrult = await reqGetNavList()
    commit(STORE_NAV_LIST, {navList: resrult.data})
  }
}
