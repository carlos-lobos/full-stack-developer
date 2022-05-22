import React,{useState,useContext} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/Forms/FormGroup';
import firebase from '../Config/firebase';
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import {loginMessage} from "../Utils/errorMessage"
import AlertCustom from '../Components/AlertCustom';
import AuthContext from '../Context/AuthContext';
import {useNavigate} from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false)
    const [alert,setAlert] = useState({variant:"",text:""})
    const context = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = async (data) => {
      try{
        console.log("Estos sons los datos del Login: ",data);
        setLoading(true)
        const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
        if(responseUser.user.uid){
          const userInfo = await firebase.db.collection("usuarios")
          .where("userId","==",responseUser.user.uid)
          .get()
          if(userInfo){
            setLoading(false)
            console.log(userInfo.docs[0]?.data())
            context.loginUser(userInfo.docs[0]?.data())
            console.log(responseUser.user.uid)
            navigate("/")
          }
        }
      }catch(e){
        console.log(e.code)
        setAlert({variant:"danger",text:loginMessage[e.code]})
        setLoading(false)
      }
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Email" type="email" register={{...register("email",{required:true})}} placeholder="Ingrese su E-Mail" />
          {errors.email?.type==="required" &&  <div className="Error-msj">El campo Email es obligatorio</div>}
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} placeholder="Ingrese su Contraseña" />
          {errors.password?.type==="required" &&  <div className="Error-msj">El campo Contraseña es obligatorio</div>}
          {errors.password?.type==="minLength" &&  <div className="Error-msj">Debe completar al menos 6 caracteres</div>}
          <br />
          <ButtonWithLoading loading={loading} type="submit" variant="primary">Ingresar</ButtonWithLoading>
          <AlertCustom {...alert}  />
        </form>
      </div>
    );
}

export default Login;
