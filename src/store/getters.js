/**
 * Created by zdy on 2018/11/19.
 */
export default{
  //购物车总数量
  totalCount(state){
    return state.cartfoods.reduce((pre,food)=>{
      return pre+food.count
    },0)
  },
  totalPrice(state){
    return state.cartfoods.reduce((pre,food)=>{
      return pre+food.count*food.price
    },0)
  }
}
