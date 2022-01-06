function attributeFilters(obj,keys){
    Object.keys(obj).forEach(item => {
        switch (Object.prototype.toString.call(obj[item])){
            case "[object Boolean]": break;
            case "[object Number]": break;
            case "[object String]": 
                if(obj[item] === "") delete obj[item];
                break;
            case "[object Undefined]": break;
            case "[object Null]": 
                delete obj[item];
                break;
            case "[object Array]": 
                if(JSON.stringify(obj[item]) === "[]") delete obj[item];
                break;
            case "[object Object]": 
                if(JSON.stringify(obj[item]) === "{}") delete obj[item];
                break;
        }
    })
    if(keys.length > 0){
        keys.forEach(item => {
            if(obj[item]) delete obj[item]
        })
    }
    return obj
}
/*
 * refer:参照物 ； source：源数据； keys：不需要拷贝的属性
*/
export default {
    copy:(refer,source = null,keys = []) => {
        let str = JSON.stringify(refer)
        let _data = JSON.parse(str)
        if(source){
            Object.keys(_data).forEach(item => {
                _data[item] = source[item] ? source[item] : ''
            })
        }else{
            _data = attributeFilters(JSON.parse(str),keys)
        }
        return _data
    }
}