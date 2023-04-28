// export {  getIcon } from "./getIcon.js";
const modules = import.meta.glob('./*.js',{ eager: true })
let methods = {}
for (const path in modules) {
    for (const moduleKey in modules[path]) {
        methods[moduleKey] = modules[path][moduleKey]
    }
}
export default methods
