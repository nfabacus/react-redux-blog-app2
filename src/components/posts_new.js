import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      <form>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // values will be { title: 'whatever you input in the form', categories: 'whatever you input', content: 'whatever you input'}
  const errors = {};
  // Validate the inputs from 'values'
  if(!values.title) {
    errors.title = "Please enter a title.";
  }
  if(!values.categories) {
    errors.categories = "Please enter some categories.";
  }
  if(!values.content) {
    errors.content = "Please enter some content.";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,             //This is the same as--> validate: validate,
  form: 'PostsNewForm'  //giving a name to the form here.
})(PostsNew);
