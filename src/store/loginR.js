
const initData={
    users:['admin','manager','end-user'],
    loginDet:'None'
}

const loginReducer=(state=initData,action)=>{
if(action.type==="LOGIN"){
    return {...state,loginDet:action.value}
}
return state;
}

export default loginReducer;