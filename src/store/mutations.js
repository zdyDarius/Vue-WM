/**
 * Created by zdy on 2018/11/19.
 */
import {GET_ADDRESS,GET_CATEGORYS,GET_ShOPS} from './mutations-type'
export default {
     [GET_ADDRESS](state,{address}){
       state.address=address
     },
     [GET_CATEGORYS](state,{categorys}){
       state.categorys=categorys
     },
    [GET_ShOPS](state,{shops}){
      state.shops=shops
    }
}
