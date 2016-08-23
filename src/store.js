const STORAGE_KEY = 'todos-vuejs'
export default {
	fetch(){
		return JSON.parse(window.localstorage.getItem(STORAGE_KEY) || '[]');
	},
	save(items){
		window.localstorage.setItem(STORAGE_KEY , JSON.stringify(items))
	}
}