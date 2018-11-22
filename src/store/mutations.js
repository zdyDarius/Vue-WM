/**
 * Created by zdy on 2018/11/19.
 */
import {GET_ADDRESS,GET_CATEGORYS,GET_ShOPS,SAVE_USER,RESET_USER,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,UPDATA_FOOD_COUNT,CLEAR_CART_FOODS} from './mutations-type'
import Vue from 'vue'
export default {
     [GET_ADDRESS](state,{address}){
       state.address=address
     },
     [GET_CATEGORYS](state,{categorys}){
       state.categorys=categorys
     },
    [GET_ShOPS](state,{shops}){
      state.shops=shops
    },
    [SAVE_USER](state,{user}){
      state.user=user
    },
    [RESET_USER](state){
      state.user={}
    },
    [RECEIVE_INFO](state, {info}) {
      state.info = info
    },
    
    [RECEIVE_RATINGS](state, {ratings}) {
      state.ratings = ratings
    },
    
    [RECEIVE_GOODS](state, {goods}) {
      state.goods = goods
    },
    [UPDATA_FOOD_COUNT](state, {food,isAdd}) {
      if(!food.count){
        Vue.set(food, 'count', 0)
      
      }
      if(isAdd){
       
        food.count++
        if(food.count===1){
          state.cartfoods.push(food)
        }
      }else {
        if(food.count){
          food.count--
          if(food.count<=0){
            state.cartfoods.splice(state.cartfoods.indexOf(food),1)
          }
        }
      }
    },
    [CLEAR_CART_FOODS](state){
      state.cartfoods.forEach((food)=>{
        food.count=0
      })
      state.cartfoods=[]
    }
    
}
