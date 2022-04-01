import request from '@/utils/request'

export default {
    //查询所有科目
    getAllSubject() {
        return request({
            url: `/eduservice/edusubject/getAllSubject`,
            method: 'get'
        })
    }
}