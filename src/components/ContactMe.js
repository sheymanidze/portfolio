import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


const ContactMe = () => {
// send an email when click contact me button from contact me section
 const [successMessage, setSuccessMessage]= useState("");
 const{register, handleSubmit, setErrors, formState: { errors }}= useForm();

  const serviceId="service_ID";
  const templateId="template_profile_contact";
  const userId="user_efK1Upr3xQiAoHD3raQ64";

  const onSubmit =(data, r)=> {
    sendEmail(
      serviceId, 
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description

      },
     userId
     ) 
     r.target.reset();
  }
  const sendEmail = (serviceId, templateId, variables, userId) => {
    emailjs.send(serviceId, templateId, variables, userId)
      .then(() => {
        setSuccessMessage("Form sent successfully! I will contact you shortly. ");
      }).catch(err=>console.error(`Something went wrong ${err}`))
   
 }
  return (
    <div id="contactMe" className="contactMe">
      <div className="text-center">
      <h1>contact me</h1>
       <p>Please fill out the form and I will contact you as soon as possible.</p>
       <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Name"
               name="name"
               {...register("name", {
                required:"Please enter name...",
                maxLength: {
                  value: 20,
                  message: "Please enter the name with fewer than 20 characters..."
                 }
              })}
             />
             <ErrorMessage errors={errors} name="name"/>
             <div className="line"></div>
            </div>
            <span className="error-message">{errors.name && errors.name.message}</span>
            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Phone Number"
               name="phone"
               {...register("phone", {
                required: "Please enter your phone number...",
              })}
             />
              <ErrorMessage errors={errors} name="phone"/>
             <div className="line"></div>
             </div>
             <span className="error-message">{errors.phone && errors.phone.message}</span>
            <div className="text-center">
             <input 
               type="email"
               className="form-control"
               placeholder="Email"
               name="email"
               {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email"
                }
              })}
             />
              <ErrorMessage errors={errors} name="email"/>
             <div className="line"></div>
            </div>
            <span className="error-message">{errors.email && errors.email.message}</span>

            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Subject"
               name="subject"
               {...register("subject", {
                required: "OOPS, you forget to add the subject...",
              })}
             />
              <ErrorMessage errors={errors} name="subject"/>
             <div className="line"></div>
            </div>
            <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>

          </div>
          <div className="col-md-6 col-xs-12">
           <div className="text-center">
             <textarea
               type="text"
               className="form-control"
               placeholder="Description"
               name="description"
               {...register("description", {
               required: "Please describe shortly what it is regarding for...",
              })}

              ></textarea>
               <ErrorMessage errors={errors} name="description"/>
             <div className="line"></div>
            </div>
            <span className="error-message">{errors.description && errors.description.message}</span>
            <button className="btn-main contact-btn" type="submit">contact me</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
