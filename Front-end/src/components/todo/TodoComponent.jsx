import React, { Component } from 'react';
import moment from 'moment';
import { Field, Formik, Form } from 'formik';


class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: 'Learn Forms Now',
      targetDate: moment(new Date()).format('YYYY-MM-DD') ,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    let {description, targetDate} = this.state;

    return(
      <>
      <h1>Todo</h1>
      <div className='container'>
        <Formik
          initialValues={{
            description,
            targetDate
          }}
          onSubmit={this.onSubmit}
        >
          {
            (props) => (
              <Form>
                <fieldset className='form-group'>
                  <label>Description</label>
                  <Field className="form-control" type="text" name="description"/>
                </fieldset>
                <fieldset className='form-group'>
                  <label>Target Date</label>
                  <Field className="form-control" type="date" name="targetDate" />
                </fieldset>
                <button className="btn btn-success" type="submit">Save</button>
              </Form>
            )
          }
        </Formik>
      </div>
      </>
    ) 
  }
}

export default TodoComponent;
