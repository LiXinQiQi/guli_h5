import request from '@/utils/request'
const baseUrl = '/orderservice/order'
export default {
    
    //创建订单
    createOrder(courseId) {
        return request({
            url: `${baseUrl}/createOrder/${courseId}`,
            method: 'post'
        })
    },
    //查询订单
    getOrderInfo(orderNo) {
        return request({
            url: `${baseUrl}/getOrderInfo/${orderNo}`,
            method: 'get'
        })
    }
}