import React, { Component } from "react"
import "../CSS Folder/index.css"
import {Formik} from "formik"
import * as Yup from "yup"
class FormLayout extends Component{
    render(){
        return(
                <Formik 
                    initialValues={ {email : "", password : "" } }  //which is initially gonna be empty
                    onSubmit={(values,{setSubmitting}) => {
                        setTimeout( ()=>{
                            console.log("LoggedIn vlaues are :", values)
                        },500)
                    }}
                        //here we will define the validation part
                        validationSchema = {Yup.object().shape({
                            email : Yup.string().email("Invalid_Email").required("Email feild should not be empty"),
                            password : Yup.string().required("password should not be empty").max(20,"Too long")
                                        .min(8,"password is too short,should be minimum 8 characters")
                                        .matches(/(?=.*[0-9])/, "password must contain Number")
                        })}
                    >
                    {
                        (props) => {
                            const {values,touched,errors,isSubmitting,handleChange,handleBlur,handleSubmit} = props
                        return(
                                    <form className="form-group" onSubmit={handleSubmit} autoComplete="off">
                                        <label>Email</label>
                                        <input type="email"  placeholder="Ener your Email_Id" 
                                        name="email" value={values.email}
                                        className={errors.email && touched.email && errors}
                                        onChange={handleChange} onBlur={handleBlur}/> 
                                        { errors.email && touched.email && (
                                                <div className="inpit-feedback">{errors.email}</div>
                                        )}

                                        <label>Password</label>
                                        <input type="password" placeholder="Ener your Password"             
                                        name="password" value={values.password} 
                                        className={errors.password && touched.password && errors}
                                        onChange={handleChange} onBlur={handleBlur} />

                                        { errors.password && touched.password && (
                                        <div className="inpit-feedback">{errors.password}</div>
                                        )}
                                
                                    <button type="submit" disabled={isSubmitting}  
                                            style={{marginTop:"15px", marginRight:"15px"}} 
                                            className="btn btn-primary">LOGIN</button>

                                    <button type="submit"  style={{marginTop:"15px"}} 
                                    className="btn btn-danger">CLEAR_Feild</button>
                                    </form>
                        
                    )}
                    }                        
                </Formik>
             )
        }
}

export default FormLayout

// {
//     (props) => {
//         console.log(props)
//         return(
//             "test"
//         )
//     }
// }