
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/Forms/FormGroup';
import firebase from '../Config/firebase';
import AlertCustom from '../Components/AlertCustom';
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';

function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false)
    const [alert,setAlert] = useState({variant:"",text:""})
    const onSubmit = async (data) => {
      try{
        console.log("Estos sons los datos del registro:",data);
        setLoading(true);
        const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
        console.log(responseUser)
        if(responseUser.user.uid){
          const document = await firebase.db.collection("usuarios")
          .add({
            name:data.name,
            lastname:data.lastname,
            userId:responseUser.user.uid
          })
          console.log(document)
          setAlert({variant:"success",text:"Registro exitoso"})
          setLoading(false)
        }
      }catch(e){
        console.log(e.code)
        switch(e.code){
          case "auth/weak-password":
              setAlert({variant:"danger",text:"La contraseña debe tener al menos 6 caracteres"})
              break;
          case "auth/email-already-in-use":
              setAlert({variant:"danger",text:"El email ya se encuentra registrado"})
              break;
          default:
              setAlert({variant:"danger",text:"Ha ocurrido un error"})
        }
        setLoading(false)
      }
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true})}} placeholder="Ingrese su nombre" helpText="El nombre debe tener al menos 1 caracter" />
          {errors.name && <div className="Error-msj">El campo nombre es obligatorio</div>}
          <FormGroup label="Apellido" register={{...register("lastname")}} placeholder="Ingrese su apellido"/>
          <FormGroup label="Email" type="email" register={{...register("email",{required:true})}} placeholder="Ingrese su E-Mail" />
          {errors.email?.type==="required" &&  <div className="Error-msj">El campo Email es obligatorio</div>}
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} placeholder="Ingrese una contraseña segura de al menos 6 caracteres" />
          {errors.password?.type==="required" &&  <div className="Error-msj">El campo Contraseña es obligatorio</div>}
          {errors.password?.type==="minLength" &&  <div className="Error-msj">Debe completar al menos 6 caracteres</div>}
          <br />
          <ButtonWithLoading loading={loading} type="submit" variant="primary">Registrarse</ButtonWithLoading>
          <AlertCustom {...alert}  />
        </form>
      </div>
    );
  
  
}

export default Registro;
