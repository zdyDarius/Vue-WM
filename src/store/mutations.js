/**
 * Created by zdy on 2018/11/19.
 */
import {GET_ADDRESS,GET_CATEGORYS,GET_ShOPS,SAVE_USER,RESET_USER,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO} from './mutations-type'
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
    }
}
