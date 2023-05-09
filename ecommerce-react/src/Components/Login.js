import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { login } from '../UserSlice';
import { useNavigate } from 'react-router-dom';
function Login(){

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const appState=useSelector(appState=>appState.isUser)
    console.log("AppState in Login:",appState.isUser)
    if(appState.value !=="hello"){
        appState.then((data)=>{
            if(data.value==="LoggedIn"){
                console.log("Role:",data.role)
                if(data.role==='admin'){
                    // alert("admin dashboard")
                    navigate("/Products")
                }
                else{
                    // alert("custom dashboard")
                    navigate("/Customer")
                }
            }
            appState.value=data.value
        })
    }

    const [form,setform]=useState({
        username:'',
        password:''
    })
    const UpdateForm=(event)=>{
        var name=event.target.name
        var value=event.target.value
        setform({...form,[name]:value})
    }
    const LoginUser=(event)=>{
        event.preventDefault()
        console.log(form)
        dispatch(login(form))
    }
    return(
        <div>
            <h1>Login Here</h1>
            <br/>
            <div class="container mt-3">
                <form>
                <div class="row">
                    <div class="col">
                        <input className='form-control' onChange={UpdateForm} name='username' type="text" placeholder="Username"></input><br/><br/>
                    </div>
                    <div class="col">
                        <input className='form-control' onChange={UpdateForm} name='password' type="password" placeholder="Password"></input><br/><br/>
                    </div>
                </div>
                    <button className='btn btn-success' onClick={LoginUser}>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;