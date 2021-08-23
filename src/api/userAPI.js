import request from '@/utils/request.js'
export const idListAPI = data => {
  return request.get('/?type=playlist&id=2415378778', data)
  // return request.get('/v1_0/authorizations', data)
}
