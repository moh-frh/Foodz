import React from "react";

import { Link } from "react-router-dom";
import { Formik } from "formik";

import { SinginValidationSchema, SingupValidationSchema } from "./schemas/index";

/* me */
import { TextInput } from "../inputs/text/index";
import { Button } from "../inputs/buttons/index";



export class SigninForm extends React.Component {
    
    render() {
        return (
            <Formik
                initialValues={{                  
                    email: "",
                    password: "",
                }}
                validationSchema={SinginValidationSchema}
                onSubmit={(values) => {                
                    this.props.submit(values)
                }}
            >
                {({
                    errors,
                    touched,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <form onSubmit={handleSubmit}>
                        
                        <div className="form-group mb-2">
                            <TextInput
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(event) => {
                                    setFieldValue("email", event.target.value);
                                }}
                                onBlure={handleBlur}
                            />
                            {touched.email && errors.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>

                        <div className="form-group mb-2">
                            <TextInput
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(event) => {
                                    setFieldValue(
                                        "password",
                                        event.target.value
                                    );
                                }}
                                onBlur={handleBlur}
                            />
                            {touched.password && errors.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                        </div>

                        <Button type="submit" color="blue" />
                        <br></br>
                        <Link to="/signup">Create new account</Link>
                    </form>
                )}
            </Formik>
        );
    }
}


export class SignupForm extends React.Component {
    
    render() {
        return (
            <Formik
                initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    wilayas: "",
                    adress: "",
                    date_birth: "",
                }}
                validationSchema={SingupValidationSchema}
                onSubmit={(values) => {
                    this.props.submit(values)
                }}
            >
                {({
                    errors,
                    touched,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <TextInput
                                    type="text"
                                    name="first_name"
                                    placeholder="First name"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "first_name",
                                            event.target.value
                                        );
                                    }}
                                    onBlure={handleBlur}
                                />
                                {touched.first_name && errors.first_name ? (
                                    <div>{errors.first_name}</div>
                                ) : null}
                            </div>
                            <div className="col">
                                <TextInput
                                    type="text"
                                    name="last_name"
                                    placeholder="Last name"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "last_name",
                                            event.target.value
                                        );
                                    }}
                                    onBlure={handleBlur}
                                />
                                {touched.last_name && errors.last_name ? (
                                    <div>{errors.last_name}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <TextInput
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(event) => {
                                    setFieldValue("email", event.target.value);
                                }}
                                onBlure={handleBlur}
                            />
                            {touched.email && errors.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>

                        <div className="form-group mb-2">
                            <TextInput
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(event) => {
                                    setFieldValue(
                                        "password",
                                        event.target.value
                                    );
                                }}
                                onBlur={handleBlur}
                            />
                            {touched.password && errors.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                        </div>

                        <div className="form-group mb-2">
                            <TextInput
                                type="text"
                                name="wilayas"
                                placeholder="Wilaya"
                                onChange={(event) => {
                                    setFieldValue(
                                        "wilayas",
                                        event.target.value
                                    );
                                }}
                                onBlure={handleBlur}
                            />
                            {touched.wilayas && errors.wilayas ? (
                                <div>{errors.wilayas}</div>
                            ) : null}
                        </div>

                        <div className="form-group mb-2">
                            <TextInput
                                type="text"
                                name="adress"
                                placeholder="Adress"
                                onChange={(event) => {
                                    setFieldValue("adress", event.target.value);
                                }}
                                onBlure={handleBlur}
                            />
                            {touched.adress && errors.adress ? (
                                <div>{errors.adress}</div>
                            ) : null}
                        </div>

                        <div className="form-group mb-2">
                            <TextInput
                                type="date"
                                name="date_birth"
                                placeholder="Date of birth"
                                onChange={(event) => {
                                    console.log(event.target.value);
                                    setFieldValue(
                                        "date_birth",
                                        event.target.value
                                    );
                                }}
                                onBlure={handleBlur}
                            />
                            {touched.date && errors.date ? (
                                <div>{errors.date}</div>
                            ) : null}
                        </div>
                        <Button type="submit" color="blue" />
                        <br></br>
                        <Link to="/login"> Already have account</Link>
                    </form>
                )}
            </Formik>
        );
    }
}

