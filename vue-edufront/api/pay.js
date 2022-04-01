import request from '@/utils/request'

export default {
    
    //生成二维码
    createNative(orderNo){
        return request({
            url: `/orderservice/paylog/createNative/${orderNo}`,
            method: 'get'
          })
    },
    queryPayStatus(orderNo){
        return request({
            url: `/orderservice/paylog/queryPayStatus/${orderNo}`,
            method: 'get'
          })
    }


}