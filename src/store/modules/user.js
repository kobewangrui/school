// import * as mutations from '../mutations'
// import * as actions from '../actions'
import $ from 'jquery'
export default {
    state: {
    },
    mutations: {
		UPDATE_USER(state,user){
			Object.assign(state,user)
		}
    },
    actions: {
		SYNC_USER(context){
			$.ajax({
				type: "POST",
				url: "/api",
				data: {name:'smart_campus.user.info'},
				async: false,
				success: (resp)=>{
					// console.log(resp.data)
					const {
						info
					} = resp.data;
					context.commit('UPDATE_USER',info)
				}
			})
        }
    }
}