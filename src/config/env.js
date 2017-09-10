/**
 * Created by wupeng on 2017/9/10.
 */

/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 */
let baseUrl;//接口服务器

let iconBaseUrl;//图标路径

iconBaseUrl = 'http://localhost:8080';

baseUrl = 'http://192.168.1.9:3000';

export default {
    baseUrl,
    iconBaseUrl
}