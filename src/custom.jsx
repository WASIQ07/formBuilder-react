import React from 'react';
import Form from '@rjsf/core';

const schema = {
  title: "A Simple Form",
  type: "object",
  properties: {
    email: {
      type: "string",
      title: "Email",
      format: "email",
    },
  },
  required: ["email"],
};

function Custom() {
  const handleSubmit = ({ formData }) => console.log(formData);

  return (
    <div>
      <h1>React Formly-like Form</h1>
      <Form schema={schema} onSubmit={handleSubmit} />
    </div>
  );
}

export default Custom;
