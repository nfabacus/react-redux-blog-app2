import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    // const { meta } = field;  //this will allow us to use just 'meta' instead of 'field.meta'...
    const { meta: { touched, error } } = field; // furthermore, we can even pull off touched and error from meta like this. now you can just use touched and error.
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      // <div className="form-group has-danger">
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          { touched? error: '' }
        </div>

      </div>
    );
  }

  onSubmit(values) {
    console.log('submitted values: ', values);
  }

  render() {
    const { handleSubmit } = this.props; //handleSubmit is pulled off from redux form.

    return (
      // When the data is submitted, run handleSubmit function. If it passes the validation, then call the onSubmit function defined above is called as a callback function.
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
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
  // Also, it passes on errors attached to the input fields (e.g.title, categories, content)
  return errors;
}

export default reduxForm({
  validate,             //This is the same as--> validate: validate,
  form: 'PostsNewForm'  //giving a name to the form here.
})(PostsNew);
