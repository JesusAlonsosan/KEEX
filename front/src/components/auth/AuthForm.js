import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ handleSubmit, handleChange, error, email, password }) => (
  
  <div className="uk-card uk-card-default uk-card-body uk-card-large ">
    <form className="uk-form-stacked" onSubmit={handleSubmit}>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="email">
          Email:
        </label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user" />
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
          Password:
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

      {error && (
        <div className="uk-alert-danger" uk-alert="true">
          <p>{error}</p>
        </div>
      )}

      <div className="uk-flex uk-flex-center">
        <button className="uk-button uk-button-primary">Login</button>
      </div>

      <div className="uk-flex uk-flex-center">
        <span>
          ¿No tienes cuenta? Registrate <Link to="/register">aqui</Link>{" "}
        </span>
      </div>
    </form>
  </div>
);

export default AuthForm;
