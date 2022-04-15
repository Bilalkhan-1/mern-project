import React from "react";
import { TextField } from "./TextField";
import { useState } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { Formik, Form, validateYupSchema } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import { Paper } from "@mui/material";

function Formm() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });
  const handleSubmit = () => {};
  const clear = () => {};
  // const validate = Yup.object({
  //   firstName: Yup.string()
  //     .max(15, "must be 15 characters or less")
  //     .required("required"),
  //   email: Yup.string().email("email is invalid").required("required"),
  //   password: Yup.string()
  //     .min(6, "Password must be atleast 6 characters")
  //     .required("password is required"),
  // });
  return (
    <Paper className="p-3">
      <Formik
        initialValues={{
          creator: "",
          title: "",
          message: "",
          tags: [],
        }}
        // validationSchema={validate}
        onSubmit={(values) => {
          let obj = {
            creator: values.creator,
            title: values.title,
            message: values.message,
            tags: values.tags,
          };
          // console.log("submitted");
          setPostData((postData.creator = values.creator));
          setPostData((postData.title = values.title));
          setPostData((postData.message = values.message));
          setPostData((postData.tags = values.tags));
          setPostData(obj);
          console.log(postData);

          dispatch(createPost(postData));
          // console.log(values);
        }}
      >
        {(formik) => (
          <div className="container">
            <Form>
              <div className="mb-3">
                <TextField label="Creator" name="creator" type="text" />
              </div>
              <div className="mb-3">
                <TextField label="Title" name="title" type="text" />
              </div>
              <div className="mb-3">
                <TextField label="Message" name="message" type="text" />
              </div>
              <div className="mb-3">
                <TextField label="Tags" name="tags  " type="text" />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
      {/* </div> */}
    </Paper>
  );
}

export default Formm;
