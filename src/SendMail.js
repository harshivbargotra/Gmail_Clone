import React from "react";
import "./SendMail.css";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

import { db } from "./firebase";
import { collection, addDoc,serverTimestamp  } from "firebase/firestore"; 

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async(formData)=>{
    console.log(formData);
    await addDoc(collection(db,'emails'),{
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
    })
    dispatch(closeSendMessage());
    
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail__close"/>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          name="to"
          {...register("to", { required: true })}
          type= 'email'
          placeholder="To:"
        />
        {errors.to && <p className="sendMail__error">To is Required!!</p>}

        <input
          {...register("subject", { required: true })}
          type="text"
          placeholder="Subject:"
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required!!</p>
        )}

        <input
          {...register("message", { required: true })}
          type="text"
          placeholder="Message..."
          className="sendMail__message"
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required!!</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
            {...register("text")}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
