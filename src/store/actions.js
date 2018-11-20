/**
 * Created by zdy on 2018/11/19.
 */
import {GET_ADDRESS,GET_CATEGORYS,GET_ShOPS,SAVE_USER,RESET_USER,RECEIVE_GOODS,RECEIVE_INFO,RECEIVE_RATINGS} from './mutations-type'
import {reqAddress,reqFoodCateGorys,reqshops,reqLogout,reqUserInfo,reqShopGoods,reqShopRatings,reqShopInfo} from '../api'
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
  },
  saveUser({commit},user){
    commit(SAVE_USER,{user})
  },
  async logout({commit}){
  const result=await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },
  async getUserInfo({commit}){
    const result=await reqUserInfo()
    if(result.code===0) {
      commit(SAVE_USER,{user:result.data})
    }
  },
  async getShopInfo({commit}, cb) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
  
    }
  },

// 异步获取商家评价列表
  async getShopRatings({commit}, cb) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
     
    }
  },

// 异步获取商家商品列表
  async getShopGoods({commit}, cb) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },
}
