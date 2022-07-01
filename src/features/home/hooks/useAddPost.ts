import { useState } from "react";

interface fields {
    title: string;
    description: string;
  }
  
  export const initialErrors = {
    description: false,
    title: false,
  };
  
  export const useAddPost = (handleClose: () => void) => {
    const [errors, setErrors] = useState(initialErrors);
  
    const resetErrors = () => setErrors(initialErrors);
  
    const validate = (fields: fields) => {
      resetErrors();
      let isValid = true;
  
      const newErrors = { ...initialErrors };
  
      if (!/^[a-zA-Z ]{6,19}$/.test(fields.title)) {
        newErrors.title = true;
        isValid = false;
      }
      if (!/^[\w].{10,100}$/.test(fields.description)) {
        newErrors.description = true;
        isValid = false;
      }
      setErrors(newErrors);
  
      return isValid;
    };
    const clearForm = (target: any) => {
      target.title.value = "";
      target.description.value = "";
    };
    const onSubmitAddPost = (event: any) => {
      event.preventDefault();
      const dataSend = {
        title: event.target.title.value,
        description: event.target.description.value,
        userId: 9,
      };
  
      if (!validate(dataSend)) return;
  
      fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend),
      })
        .then((res) => res.json())
        .then((data) => {
          handleClose();
          clearForm(event.target);
        });
    };
  
    return {
      onSubmitAddPost,
      errors,
    };
  };