import React from "react";
import { Link } from "react-router-dom";

const SignupForm = ({ handleSubmit, handleChange, error, email, password,name,lastname,confirmPassword }) => (
  <div className="uk-card uk-card-default uk-card-body uk-card-large ">
    <form className="uk-form-stacked" onSubmit={handleSubmit}>
    <div className="uk-margin">
        <label className="uk-form-label" htmlFor="email">
          Nombre:
        </label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user" />
          <input
            value={name}
            onChange={handleChange}
            className="uk-input"
            type="text"
            name="username"
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="email">
          Apellido(s):
        </label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user" />
          <input
            value={lastname}
            onChange={handleChange}
            className="uk-input"
            type="text"
            name="lastname"
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="email">
          Email:
        </label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: mail" />
          <input
            value={email}
            onChange={handleChange}
            className="uk-input"
            type="email"
            name="email"
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="password">
          Contraseña:
        </label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: lock" />
          <input
            value={password}
            onChange={handleChange}
            className="uk-input"
            type="password"
            name="password"
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="password">
          Confirmar Contraseña:
        </label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: lock" />
          <input
            value={confirmPassword}
            onChange={handleChange}
            className="uk-input"
            type="password"
            name="confirmPassword"
          />
        </div>
      </div>

      {error && (
        <div className="uk-alert-danger" uk-alert="true">
          <p>{error}</p>
        </div>
      )}


      <div className="uk-flex uk-flex-center">
        <button className="uk-button uk-button-primary">Registrate</button>
      </div>

      <div className="uk-flex uk-flex-center">
        <span>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>{" "}
        </span>
      </div>
    </form>
  </div>
);

export default SignupForm;