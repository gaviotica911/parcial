import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
function Login({ onLogin }) {
  const navigate = useNavigate();
  const intl = useIntl();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(intl.formatMessage({ id: "Form submitted successfully!" }));
      onLogin();
      navigate("/home");
    } else {
      alert(
        intl.formatMessage({
          id: "Form submission failed due to validation errors.",
        })
      );
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.email.trim()) {
      errors.email = intl.formatMessage({ id: "Email is required" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = intl.formatMessage({ id: "Email format is invalid" });
    }

    if (!data.password.trim()) {
      errors.password = intl.formatMessage({ id: "Password is required" });
    } else if (data.password.length < 8) {
      errors.password = intl.formatMessage({
        id: "Password must be at least 8 characters long",
      });
    }

    return errors;
  };

  return (
    <div className="login-container">
      <div id="f">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h1>
              <FormattedMessage id="LogIn" />
            </h1>

            <FormattedMessage id="Email" />
            <Form.Control
              className="form-input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FormattedMessage id="Password" />
            <Form.Control
              className="form-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            <FormattedMessage id="LogIn" />
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
