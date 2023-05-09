import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { register } from '../UserSlice';
function Register(){

    const dispatch=useDispatch()

    const appState=useSelector(appState=>appState.isUser)
    console.log("AppState:",appState)
    if(appState.value !=="hello"){
        appState.then(
            (data)=>{
                appState.value=data.value
            }
        )
    }

    const [form,setform]=useState({
        username:'',
        password:'',
        email:''
    })
    const UpdateForm=(event)=>{
        var name=event.target.name
        var value=event.target.value
        setform({...form,[name]:value})
    }
    const RegisterUser=(event)=>{
        event.preventDefault()
        console.log(form)
        dispatch(register(form))
    }
    return(
        <div>
            <h1>Register Here</h1>
            <div class="container mt-3">
                <form>
                    <div className="row">
                        <div className="col">
                            <input onChange={UpdateForm} className='form-control' name='username' type="text" placeholder="Username"></input>
                        </div>
                        <div className="col">
                            <input onChange={UpdateForm} className='form-control' name='password' type="password" placeholder="Password"></input>
                        </div>
                        <div className="col">
                            <input onChange={UpdateForm} className='form-control' name='email' type="email" placeholder="Email"></input>
                        </div>
                    </div>
                    <br/><br/>
                        <button className='btn btn-primary' onClick={RegisterUser}>Register</button>
                </form>
            </div>
        </div>
    )
}
export default Register;