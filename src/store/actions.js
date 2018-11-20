/**
 * Created by zdy on 2018/11/19.
 */
import {GET_ADDRESS,GET_CATEGORYS,GET_ShOPS} from './mutations-type'
import {reqAddress,reqFoodCateGorys,reqshops} from '../api'
export default {
  async getAddress({commit,state}){
    const result=await reqAddress(state.longitude,state.latitude)
    commit(GET_ADDRESS,{address:result.data})
   },
  async getCategorys({commit}){
    const result=await reqFoodCateGorys()
    commit(GET_CATEGORYS,{categorys:result.data})
  },
  async getShops({commit,state}){
    const result=await reqshops({longitude:state.longitude,latitude:state.latitude})
    console.log('getshops',result.data)
    commit(GET_ShOPS,{shops:result.data})
  }
}
