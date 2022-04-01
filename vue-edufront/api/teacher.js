import request from '@/utils/request'
const api_name = '/eduservice/teacherapi'
export default {

    getTeacherApiPage(current, limit) {
        return request({
            url: `${api_name}/getTeacherApiPage/${current}/${limit}`,
            method: 'get'
        })
    },
    getTeacherCourseById(id) {
        return request({
            url: `${api_name}/getTeacherCourseById/${id}`,
            method: 'get'
        })
    }
}