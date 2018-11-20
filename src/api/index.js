/**
 * Created by zdy on 2018/11/19.
 */
import ajax from './ajax'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress=(longitude, latitude)=>ajax(`/api/position/${latitude},${longitude}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
 export const reqFoodCateGorys=()=>ajax('/api/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqshops=({longitude, latitude})=>ajax('/api/shops',{longitude,latitude})