const initialState = {
  trips:[{
    id:1,
    img:'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-1.jpg',
    catetory:['한인민박', '제주도'],
    title:'[애월/펜션] 스테이퐁당]',
    price:110000
  }],
  sort:'default' //priceH, priceL
}

const listReducer = (state= initialState, action)=>{
  return state
}

export default listReducer;