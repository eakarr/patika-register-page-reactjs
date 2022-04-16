import { useState } from "react";
import { RegisterationScheme } from "../constants/RegisterationScheme";
import { InitialValues } from "../constants/InitialValues";
import { Formik } from "formik";
import style from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const [isValid, setIsValid] = useState(false);

  const onSubmit = (data) => {
    console.log("Form data", data);
    setIsValid(true);
  };

  return (
    <div className={style.formContainer}>
      <Formik
        onSubmit={onSubmit}
        initialValues={InitialValues}
        validationSchema={RegisterationScheme}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        }) => {
          return (
            <form>
              <div className={style.formHeader}>
                <h1>
                  <span>Register</span>
                </h1>
              </div>
              <div className={style.formNameSurnameGroup}>
                <div className={style.name}>
                  <label>NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={style.surname}>
                  <label>SURNAME</label>
                  <input
                    type="text"
                    name="surname"
                    placeholder="Enter your surname"
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className={style.formGroup}>
                <label className={`${style.required} ${style.title}`}>
                  E-MAIL
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your e-mail"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  {errors.email && touched.email ? errors.email : null}
                </span>
              </div>

              <div className={style.formGroup}>
                <label className={`${style.required} ${style.title}`}>
                  USERNAME
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  {errors.username && touched.username ? errors.username : null}
                </span>
              </div>

              <div className={style.formGroup}>
                <label className={`${style.required} ${style.title}`}>
                  PASSWORD
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  {errors.password && touched.password ? errors.password : null}
                </span>
              </div>

              <div className={style.formGroup}>
                <label className={`${style.required} ${style.title}`}>
                  CONFIRM PASSWORD
                </label>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  {errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : null}
                </span>
              </div>

              <div className={style.formCheckBoxAndParagraphGroup}>
                <div className={style.checkBoxAndParagraph}>
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    value={values.privacyPolicy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className={style.required}>
                    I accept the Terms of Use & Privacy Policy.
                  </p>
                </div>
                <span>
                  {errors.privacyPolicy && touched.privacyPolicy
                    ? errors.privacyPolicy
                    : null}
                </span>
              </div>

              <div className={style.formGroup}>
                <button
                  className={
                    isValid ? style.registerButtonDisable : style.registerButton
                  }
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isValid}
                >
                  Register Now
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
