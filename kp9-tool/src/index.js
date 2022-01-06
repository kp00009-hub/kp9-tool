import utils from "./utils"
export default{
    install:(Vue)=>{
        Vue.prototype.$u = utils
    }
}