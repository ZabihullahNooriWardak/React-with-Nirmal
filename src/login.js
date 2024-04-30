import { useDispatch, useSelector } from "react-redux";

const Login=()=>{
  let roleSelector=useSelector(state=>state.lr.users)
      let loginDispatch= useDispatch()
  function roleChangeHandler(e){
    let role=e.target.options[e.target.selectedIndex].text;
    loginDispatch({type:"LOGIN",value:role});

  }
    return(
        <div className="customDiv">
        <h3>Login Component</h3>
        <hr/>
            <select onChange={(e)=>roleChangeHandler(e)}>
                {
           roleSelector.map((element,index)=>{
            return <option key={index}>{element}</option>
           })
                }
                </select>
        </div>
    )
}
export default Login;