const baseDate = ['aa', 'bb', 'cc']

const baseFoodData = ['苹果', '牛奶']

export const initDataBase = () => {
  return [...baseDate]
}

export const clearDataBase = () => {
  return []
}

export const isDataBase = (data, item) => {
  const res = data.indexOf(item) !== -1
  if (res) {
    console.log(`${item}属于dataBase`)
  } else {
    console.log(`${item}不属于dataBase`)
  }
  return res
}

export const initFoodDataBase = () => {
  console.log('初始化foodDataBase')
}

export const isFoodDataBase = (food) => {
  const res = baseFoodData.indexOf(food) !== -1
  if (res) {
    console.log(`${food}属于baseFoodData`)
  } else {
    console.log(`${food}不属于baseFoodData`)
  }
  return res
}
