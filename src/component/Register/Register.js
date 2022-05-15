import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { dangKyAction } from "../../redux/action/dangKyAction";
import { DatePicker, Space } from "antd";
import moment from "moment";

export default function Register() {
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    birthday: Yup.string()
      .matches(/^[0-9]+$/, "Only number!")
      .required("birthday is Required")
      .min(0, "Too Short!")
      .max(2, "Too Long!"),
    birthmonth: Yup.string()
      .matches(/^[0-9]+$/, "Only number!")
      .required("birthday is Required")
      .min(0, "Too Short!")
      .max(2, "Too Long!"),
    birthyear: Yup.string()
      .matches(/^[0-9]+$/, "Only number!")
      .required("birthday is Required")
      .min(4, "Too Short!")
      .max(4, "Too Long!"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Only number!")
      .min(9, "Too Short!")
      .max(13, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <Formik
      class="container mx-auto p-4 bg-white"
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        birthday: "",
        taiKhoan: "",
        gender: true,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        const yourBirthday = `${values.birthday}/${values.birthmonth}/${values.birthyear}`;
        const data = {
          ...values,
          birthday: yourBirthday,
          birthmonth: null,
          birthyear: null,
        };
        dispatch(dangKyAction(data));
      }}
    >
      {({ errors, touched }) => (
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
          <h1 class="text-lg font-bold">Register</h1>
          <Form class="flex flex-col mt-4">
            <Field
              type="text"
              name="name"
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Họ tên"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field
              type="email"
              name="email"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              type="text"
              name="phone"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Số điện thoại"
            />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            <Field
              type="password"
              name="password"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Mật khẩu"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <div className="flex flex-row ">
              <div className="flex flex-col">
                <Field
                  type="text"
                  name="birthday"
                  class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  placeholder="Ngày sinh"
                />
                {errors.birthday && touched.birthday ? (
                  <div>{errors.birthday}</div>
                ) : null}
              </div>
              <div className="flex flex-col mx-3">
                <Field
                  type="text"
                  name="birthmonth"
                  class="px-4 py-3 mt-4 w-full  rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  placeholder="Tháng sinh"
                />
                {errors.birthmonth && touched.birthmonth ? (
                  <div>{errors.birthmonth}</div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <Field
                  type="text"
                  name="birthyear"
                  class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  placeholder="năm sinh"
                />
                {errors.birthyear && touched.birthyear ? (
                  <div>{errors.birthyear}</div>
                ) : null}
              </div>
            </div>
            <Field
              type="text"
              name="address"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Địa chỉ"
            />
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
            <button
              type="submit"
              class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
              Register
            </button>
            <div class="flex flex-col items-center mt-5">
              <p class="mt-1 text-xs font-light text-gray-500">
                Register already?
                <NavLink to="/login" class="ml-1 font-medium text-blue-400">
                  Login now
                </NavLink>
              </p>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
