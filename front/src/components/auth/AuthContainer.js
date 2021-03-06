import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { login, register } from '../../services/auth'
import backgroundI from '../assets/img/atico.jpeg'
import SignupForm from './SignupForm';
class AuthFormContainer extends Component {
  state = {
    auth: {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { auth } = this.state
    const { pathname } = this.props.location
    if (!auth.email.length) { return this.setState({ error: 'Debes agregar una tarea' }) }
    pathname === '/login' ? this.onLogin() : this.onRegister()
  }

  onLogin = () => {
    const { auth } = this.state
    login(auth)
      .then(({ token, user }) => {
        console.log('Done')
        localStorage.setItem('TOKEN', token)
        localStorage.setItem('USER', JSON.stringify(user))
        this.props.setUser(user)
        this.props.history.push('/home')
      })
      .catch(error => {
        return this.setState({ error: error.message })
      })
  }

  onRegister = () => {
    const { auth } = this.state
    console.log(auth)
    register(auth)
      .then(({ token, user }) => {
        localStorage.setItem('TOKEN', token)
        localStorage.setItem('USER', JSON.stringify(user))
        this.props.setUser(user)
        this.props.history.push('/home')
      })
      .catch(error => {
        return this.setState({ error: error.message })
      })
  }

  handleChange = e => {
    const { auth } = this.state
    let field = e.target.name
    auth[field] = e.target.value
    this.setState({ auth })
    console.log('auth',auth)
  }

  render () {
    console.log(this.props)
    const { error, auth } = this.state
    const { pathname } = this.props.location
    return (
      <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={ {backgroundImage:`url(${backgroundI})`, height:'91.6vh'} }>
        <div className='uk-flex uk-flex-center '>
        {pathname === '/login' ?
          <AuthForm
            {...auth}
            error={error}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />:
          <SignupForm
            {...auth}
            error={error}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          }
        </div>
        
      </div>
    )
  }
}

export default AuthFormContainer