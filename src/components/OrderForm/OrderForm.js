import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./OrderForm.scss";

const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Fullt navn er påkrevd")
        .matches(
          /^[a-zA-ZæøåÆØÅ\s]*$/,
          "Navnet kan bare inneholde bokstaver og mellomrom"
        ),
      email: Yup.string()
        .email("Ugyldig e-postadresse")
        .required("E-post er påkrevd"),
      address: Yup.string().required("Postadresse er påkrevd"),
      city: Yup.string().required("By er påkrevd"),
      postalCode: Yup.string().required("Postnummer er påkrevd"),
      country: Yup.string().required("Land er påkrevd"),
    }),
    onSubmit: (values) => {
      alert("Bestilling vellykket");
    },
  });

  return (
    <div>
      <h2 className="form-header">Bestillingsskjema</h2>
      <form
        id="order-form"
        onSubmit={formik.handleSubmit}
        className="order-form"
      >
        <label htmlFor="fullName">Fullt navn</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="error">{formik.errors.fullName}</div>
        ) : null}

        <label htmlFor="email">E-postadresse</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="address">Postadresse</label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}

        <label htmlFor="city">By</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="error">{formik.errors.city}</div>
        ) : null}

        <label htmlFor="postalCode">Postnummer</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postalCode}
        />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <div className="error">{formik.errors.postalCode}</div>
        ) : null}

        <label htmlFor="country">Land</label>
        <input
          id="country"
          name="country"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
        />
        {formik.touched.country && formik.errors.country ? (
          <div className="error">{formik.errors.country}</div>
        ) : null}

        <button type="submit">Send inn</button>
      </form>
    </div>
  );
};

export default OrderForm;
