/**
 * Created by zdy on 2018/11/20.
 */
 a=2
function fn(){
  console.log(a)
}
function fn1() {
  a=3
  fn()
}
fn1()


