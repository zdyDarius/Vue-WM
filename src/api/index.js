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
//发送短信验证码
export const reqsendcode=(phone)=>ajax('/api/sendcode',{phone})
//手机号验证码登陆
export  const reqphonelogin=(phone,code)=>ajax('/api/login_sms',{phone,code},'POST')
// 用户名密码登陆
export const reqpwdlogin=(name,pwd,captcha)=>ajax('/api/login_pwd',{name,pwd,captcha},'POST')
// 获取当前用户信息
export const reqUserInfo = () => ajax('/api/userinfo')
// 退出登陆
export const reqLogout = () => ajax('/api/logout')
/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
