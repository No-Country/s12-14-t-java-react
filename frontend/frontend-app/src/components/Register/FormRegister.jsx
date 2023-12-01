import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import iconError from '/img/iconErrorTextField.svg';
import  iconCheck from '/img/iconCheckTextField.svg';

const FormRegister=()=>{
    const [selected, setSelected]= useState('');   
    const history=useNavigate();
    const goToLogin =()=>{
        history('/Login');
    } 

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\/?@[\\\]^_{|}]).{8,}$/;

    
    /* Obteniendo datos del formulario */
    const {register, handleSubmit, formState:{errors}, watch, reset}= useForm({
        defaultValues:{
            empresa:'',
            nombres:'',
            apellidos:'',
            correo:'',
            password:'',
            confirmPassword:''
        },
        mode:'onChange'
    });
    const onSubmit =handleSubmit( (data)=>{
        console.log(data);
        reset();
    }

    )
    return (
        <form 
        onSubmit={onSubmit}
        className="text-blue flex flex-col justify-center items-center mb-16">

            <label 
            className={`labelInput `+(selected=='empresa'? `appear`: `none-appear`)}
            htmlFor="empresa">
            Nombre de la empresa</label>
            <div className="input-container">
            {
                selected=='empresa'?
                (errors.empresa? <img 
            className='icon-input w-8 h-8'
            src={iconError}/> :<img className='icon-input w-6 h-6 ' src={iconCheck}/>):<></>}

                <input
                {
                    ...register('empresa',{
                        required:{
                            value:true,
                            message: "El nombre de la empresa es obligatorio"
                        },
                        minLength:{
                            value: 2,
                            message: "El minimo de caracteres es 2"
                        },
                        maxLength:{
                            value:50,
                            message:"El máximo de caracteres es 50"
                        }
                    })
                }
                onFocus={()=>setSelected('empresa')}
                onBlur={()=>setSelected('')}
                className={"textField "}
                name='empresa'
                style={{ outline: errors.empresa? '2px solid #6a3838': `none`, border: `none`}}
                type="text"
                id="empresa"
                placeholder={selected=='empresa'? "": "Nombre de la empresa..." }
                
                aria-autocomplete='both'
                autoComplete='empresa'
                />
            </div>
            {
                errors.empresa && <span className='text-[18px] text-[#6a3838] font-bold'>
                    {errors.empresa.message}
                </span>
            }
            <label 
            className={`labelInput `+(selected=='nombre'? `appear`: `none-appear`)}
            htmlFor="nombre">
            Nombres</label>
            <div className="input-container">
            {
                selected=='nombre'?
                (errors.nombres? <img 
            className='icon-input w-8 h-8'
            src={iconError}/> :<img className='icon-input w-6 h-6 ' src={iconCheck}/>):<></>}
                <input
                onClick={()=>setSelected('nombre')}
                onBlur={()=>setSelected('')}
                className="textField"
                type="text"
                id="nombre"
                name='nombre'
                aria-autocomplete='list'
                style={{ outline: errors.nombres? '2px solid #6a3838': `none`, border: `none`}}
                placeholder={selected=='nombre'? "": "Nombres..." }
                {
                    ...register('nombres',{
                        required:{
                            value:true,
                            message: "El nombre es obligatorio"
                        },
                        minLength:{
                            value: 2,
                            message: "El minimo de caracteres es 2"
                        },
                        maxLength:{
                            value:50,
                            message:"El máximo de caracteres es 50"
                        },
                        pattern:{
                            value: /^[a-zA-Z0-9\s]+$/,
                            message: "El nombre no es válido"
                        }
                
                    })
                }
                />
            </div>
                        {
                errors.nombres && <span className='text-[18px] text-[#6a3838] font-bold'>
                    {errors.nombres.message}
                </span>
            }
            <label 
            className={`labelInput `+(selected=='apellido'? `appear`: `none-appear`)}
            htmlFor="apellido">
            Apellidos</label>
            <div className="input-container">
            {
                selected=='apellido'?
               ( errors.apellidos? <img className='icon-input w-8 h-8'
            src={iconError}/>:<img className='icon-input w-6 h-6 ' src={iconCheck}/>):<></>}

                <input
                onFocus={()=>setSelected('apellido')}
                onBlur={()=>setSelected('')}
                className="textField"
                type="text"
                id="apellido"
                name='apellido'
                aria-autocomplete='both'
                autoComplete='apellido'
                style={{ outline: errors.apellidos? '2px solid #6a3838': `none`, border: `none`}}
                placeholder={selected=='apellido'? "": "Apellidos..." }
                {
                    ...register('apellidos',{
                        required:{
                            value:true,
                            message: "Los apellidos es un campo obligatorio"
                        },
                        minLength:{
                            value: 2,
                            message: "El minimo de caracteres es 2"
                        },
                        maxLength:{
                            value:50,
                            message:"El máximo de caracteres es 50"
                        },
                        pattern:{
                            value: /^[a-zA-Z0-9\s]+$/,
                            message: "Los apellidos no son válidos"
                        }
                
                    })
                }
                />
            </div>
                        {
                errors.apellidos && <span className='text-[18px] text-[#6a3838] font-bold'>
                    {errors.apellidos.message}
                </span>
            }
            <label 
            className={`labelInput `+(selected=='correo'? `appear`: `none-appear`)}
            htmlFor="correo">
            Correo electronico</label>
            <div className="input-container">
            {
                selected=='correo'?
                (errors.correo? <img 
            className='icon-input w-8 h-8'
            src={iconError}/> :<img className='icon-input w-6 h-6 ' src={iconCheck}/>):<></>}
                <input
                onFocus={()=>setSelected('correo')}
                onBlur={()=>setSelected('')}
                className="textField"
                style={{ outline: errors.correo? '2px solid #6a3838': `none`, border: `none`}}
                type="email"
                id="correo"
                name='correo'
                autoComplete='correo'
                aria-autocomplete='both'
                placeholder={selected=='correo'? "": "Correo electronico..." }
                {
                    ...register('correo',{
                        required:{
                            value:true,
                            message: "El correo electrónico es obligatorio"
                        },
                
                        pattern:{
                            value: emailRegex,
                            message: "El correo electrónico no es válido"
                        }
                
                    })
                } />
                
            </div>{
                errors.correo && <span className='text-[18px] text-[#6a3838] font-bold'>
                    {errors.correo.message}
                </span>
            }
            <label 
            className={`labelInput `+(selected=='password'? `appear`: `none-appear`)}
            htmlFor="password">
            Contraseña</label>
            <div className="input-container">
            {
                selected=='password'?
                (errors.password? <img 
            className='icon-input w-8 h-8'
            src={iconError}/> :<img className='icon-input w-6 h-6 ' src={iconCheck}/>):<></>}
                <input
                onFocus={()=>setSelected('password')}
                onBlur={()=>setSelected('')}
                className="textField"
                type="password"
                id="password"
                style={{ outline: errors.password? '2px solid #6a3838': `none`, border: `none`}}
                placeholder={selected=='password'? "": "Contraseña..." }
                {
                    ...register('password',{
                        required:{
                            value:true,
                            message: "La contraseña es obligatoria"
                        },
                        minLength:{
                            value: 8,
                            message: "La contraseña debe ser entre 8 y 12 caracteres"
                        },
                        maxLength:{
                            value: 12,
                            message: "La contraseña debe ser entre 8 y 12 caracteres"
                        },
                        pattern:{
                            value: passwordRegex,
                            message: "La contraseña tiene entre  8 y 12 caracteres, al menos una letra mayúscula, una minúscula, un número y un caracter especial"
                        }
                    })
                } />
                
            </div>{
                errors.password && <span className='text-center text-[18px] text-[#6a3838] font-bold'>
                    {errors.password.message}
                </span>
            }
            {
                selected=='password' && !errors.password? <span className='text-center text-[18px] text-[#2E4BDF] font-bold'>La contraseña tiene entre  8 y 12 caracteres, al menos una letra mayúscula, una minúscula, un número y un caracter especial</span>:<></>
            }
            <label 
            className={`labelInput `+(selected=='confirmPassword'? `appear`: `none-appear`)}
            htmlFor="password">
            Confirmar contraseña</label>
            <div className="input-container">
            {
                selected=='confirmPassword'?
                (errors.confirmPassword? <img 
            className='icon-input w-8 h-8'
            src={iconError}/> :<img className='icon-input w-6 h-6 ' src={iconCheck}/>):<></>}
                <input
                onFocus={()=>setSelected('confirmPassword')}
                onBlur={()=>setSelected('')}
                className="textField"
                type="password"
                id="confirmPassword"
                style={{ outline: errors.confirmPassword? '2px solid #6a3838': `none`, border: `none`}}
                placeholder={selected=='confirmPassword'? "": "Confirmar contraseña..." }
                {
                    ...register('confirmPassword',{
                        required:{
                            value:true,
                            message: "La confirmación de contraseña es obligatorio"
                        },
                        validate: (value)=>{
                            return watch('password')==value || "La contraseña no coincide"
                        }
                    })
                } />
            </div>
            {
                errors.confirmPassword && <span className='text-[18px] text-[#6a3838] font-bold'>
                    {errors.confirmPassword.message}
                </span>
            }
            <button type='submit' className='main-button mt-32 bg-blue' >
                Registrarme
            </button>
            <button className='main-button mt-3' onClick={goToLogin}>
                Iniciar Sesión
            </button>
        </form>
    )
}
export default FormRegister;