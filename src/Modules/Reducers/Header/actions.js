export const setCurrent = (path) => ({
  type:'setCurrent',
  payload:{
    current:path
  }
})

export const setSort = (sort) =>({
  type:'setSort',
  payload:{
    sort
  }
})