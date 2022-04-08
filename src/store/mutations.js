import {
  STORE_NAV_LIST,
  STORE_COMPANY_INFO
} from './mutation-types'
export default
{
  [STORE_NAV_LIST] (state, {navList}) {
    state.navList = navList
  },
  [STORE_COMPANY_INFO] (state, {companyInfo}) {
    state.companyInfo = companyInfo
  }
}
