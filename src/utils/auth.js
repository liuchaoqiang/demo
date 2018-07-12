/**
 * 校验用户是否登录,以及设置登录tokenKey on 2018/3/10.
 */
import Cookies from 'js-cookie'
import { getUserCookieInfo } from '@/service/app' // 引入接口
const TokenKey = 'Admin-Token'
const UserInfoKey = 'User-Info'
export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
// **********uid相关Cookie设置***********
export function getUserInfo () {
  if (Cookies.get(UserInfoKey) === false) {
    getUserCookieInfo().then(function (result) {
      if (result.success && result.code === 1) {
        setUserInfo(result.data.userInfo)
        return result.data.userInfo
      }
    })
  }
  return Cookies.get(UserInfoKey)
}
export function setUserInfo (userinfo) {
  return Cookies.set(UserInfoKey, userinfo)
}
export function removeUserInfo () {
  return Cookies.remove(UserInfoKey)
}
// **********uid相关Cookie设置***********/
