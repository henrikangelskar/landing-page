import React from "react";
import { useFormik } from "formik"; // Bruker useFormik for å håndtere form-styring og validering
import * as Yup from "yup"; // Importerer Yup for skjema valideringsregler
import "./OrderForm.scss"; // Importerer stylesheet for å styling

const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      // Setter initialverdier for form-feltene, noe som er nyttig for å styre form-tilstander fra start
      fullName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    validationSchema: Yup.object({
      // Definerer valideringsreglene for hvert felt
      fullName: Yup.string()
        .required("Fullt navn er påkrevd") // Validerer at feltet er påkrevd og gir en tilpasset melding
        .matches(
          /^[a-zA-ZæøåÆØÅ\s]*$/,
          "Navnet kan bare inneholde bokstaver og mellomrom" // Sjekker at navnet kun inneholder bokstaver og mellomrom
        ),
      email: Yup.string()
        .email("Ugyldig e-postadresse") // Validerer at "stringen" er en e-postadresse
        .required("E-post er påkrevd"), // Markerer feltet som påkrevd
      address: Yup.string().required("Postadresse er påkrevd"),
      city: Yup.string().required("By er påkrevd"),
      postalCode: Yup.string().required("Postnummer er påkrevd"),
      country: Yup.string().required("Land er påkrevd"),
    }),
    onSubmit: (values) => {
      alert("Bestilling vellykket"); // Handling utført når skjemaet er validert og innsendt
    },
  });

  return (
    <div>
      <h2 className="form-header">Bestillingsskjema</h2>
      <form
        id="order-form"
        onSubmit={formik.handleSubmit} // Håndterer innsending av skjema
        className="order-form"
      >
        <label htmlFor="fullName">Fullt navn</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange} // Kobler input-feltet til Formiks håndtering av endringer
          onBlur={formik.handleBlur} // Håndterer når et felt mister fokus, viktig for validering på touch
          value={formik.values.fullName} // Binder input-verdien til Formiks tilstandsverdier
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="error">{formik.errors.fullName}</div> // Viser feilmeldinger for dette feltet
        ) : null}

        {/* Gjentar samme mønster for resten av feltene */}
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
