export const hasInArray = (arr, subNav) => {
  if (Array.isArray(arr)) {
    let result = false
    for (let i = 0; arr.length > i; i++) {
      if (arr[i].subNav === subNav) {
        result = true
      }
    }
    return result
  }
}

export const doRouterTabArray = (routerTabArray, params) => {
  let has = hasInArray(routerTabArray, params.subNav)
  if (!has) {
    routerTabArray.push(params)
  }
  routerTabArray = setRouterTabActive(routerTabArray, params)
  return routerTabArray
}

export const delRouterTab = (routerTab, subNav) => {
  let newArray = []
  let resArr = []
  for (let i = 0; routerTab.length > i; i++) {
    if (routerTab[i].subNav !== subNav) {
      newArray.push(routerTab[i])
    }
  }
  resArr = setActiveForDelRounterTab(newArray)
  console.log(resArr)
  return resArr
}

export const setActiveForDelRounterTab = (routerTab) => {
  if (routerTab.length > 0) {
    routerTab[routerTab.length - 1].active = true
  }
  return routerTab
}

export const setRouterTabActive = (routerTab, params) => {
  for (let i = 0; routerTab.length > i; i++) {
    if (routerTab[i].active) {
      routerTab[i].active = false
    }
  }
  for (let j = 0; routerTab.length > j; j++) {
    if (routerTab[j].subNav === params.subNav) {
      routerTab[j].active = true
    }
  }
  return routerTab
}
