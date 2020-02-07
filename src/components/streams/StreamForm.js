import React from 'react';
import {Field, reduxForm} from 'redux-form';
import "../../styles/Global.css";


class StreamForm extends React.Component {

  renderError({error, touched})  {
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }
  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
    <div className={className}>
    <label>{label}</label>
    <input {...input} autoComplete="off"/>
    {this.renderError(meta)}
    </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Insira um Título" />
        <Field name="description1" component={this.renderInput} type="text" 
        label="Descrição 1" />
         <Field name="description2" component={this.renderInput} type="text" 
        label="Descrição 2" />
         <Field name="description3" component={this.renderInput} type="text" 
        label="Descrição 3" />
         <Field name="description4" component={this.renderInput} type="text" 
        label="Descrição 4" />
         <Field name="description5" component={this.renderInput} type="text" 
        label="Descrição 5" />
        <Field name="img" component={this.renderInput} label="Insira a url da imagem OCC" />
        <button className="ui button primary">Enviar</button>
      </form>
    )
  }
}

const validate =(formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Você deve inserir um título'
  }

  if (!formValues.description1) {
    errors.description1 = 'Você deve inserir a descrição 1'
  }

  if (!formValues.description2) {
    errors.description2 = 'Você deve inserir a descrição 2'
  }

  if (!formValues.img) {
    errors.img = 'Você deve inserir uma imagem válida do OCC'
  }
  return errors

}
export default  reduxForm({
  form: 'streamForm',
  validate
}) (StreamForm)

