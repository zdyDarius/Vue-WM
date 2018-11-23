/**
 * Created by zdy on 2018/11/23.
 */
import moment from 'moment'
import Vue from 'vue'

Vue.filter('data_format',(val,format)=>{
  return moment(val).format(format || 'YYYY-MM-DD HH:mm:ss')
})
