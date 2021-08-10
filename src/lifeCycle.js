const baseDate = ['aa', 'bb', 'cc']
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
  return data.indexOf(item) !== -1
}
