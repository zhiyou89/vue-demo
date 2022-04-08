import { Random } from 'mockjs'
export const NavList =
[
  {
    'id': 1,
    'name': '导航一',
    'icon': 'el-icon-s-platform',
    'erji': [
      {
        'id': 1,
        'name': '导航一二7级',
        'url': '/product'
      },
      {
        'id': 2,
        'name': '导航一二8级',
        'url': '/msite'
      },
      {
        'id': 3,
        'name': '导航一二级',
        'url': '/product'
      }
    ]
  },
  {
    'id': 2,
    'name': '导航二',
    'icon': 'el-icon-s-tools',
    'erji': [
      {
        'id': 4,
        'name': '导航二二级',
        'url': 'product'
      },
      {
        'id': 5,
        'name': '导航二二级',
        'url': 'product'
      },
      {
        'id': 6,
        'name': '导航二二级',
        'url': 'product'
      }
    ]
  },
  {
    'id': 3,
    'name': '导航二',
    'icon': 'el-icon-s-tools',
    'erji': [
      {
        'id': 7,
        'name': '导航二二级',
        'url': 'product'
      },
      {
        'id': 8,
        'name': '导航二二级',
        'url': 'product'
      },
      {
        'id': 9,
        'name': '导航二二级',
        'url': 'product'
      }
    ]
  }
]

export const CompanyIfo =
{
  'name:': '友冠信息科技',
  'logo|': Random.dataImage('200x200', 'you guan logo')
}

export default{
  CompanyIfo,
  NavList
}
