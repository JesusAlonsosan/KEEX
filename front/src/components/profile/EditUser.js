import React,{Component} from 'react'
import { editProfile } from '../../services/auth';


class EditUser extends Component {
    state={
        user:{},
        data:{}
    }
    handleChange=(e)=>{
        let {data}=this.state
        let {name,value}=e.target
        if (e.target.file) {
            data.image = e.target.file
            return this.setState({ data })
          }
        data[name]=value
        this.setState({data})
    }
    onSubmit=e=>{
        let{data,user}=this.state
        e.preventDefault()
        console.log(data)
        editProfile(user._id,data).then(res=>{
            this.props.history.push('/profile')
            localStorage.setItem('USER',JSON.stringify(res.user))
        }).catch(err=>console.log(err))
    }

    componentWillMount(){
        let user = JSON.parse(localStorage.getItem("USER"))
        if(!user){
            this.props.history.push('/')
        }else{
            this.setState({user})
        }
    }
    render(){
        let{user}=this.state
        return(
            <div style={{ backgroundColor: "rgb(240, 235, 2)", padding: 60 }}>
                <div
                style={{
                    backgroundColor: "rgb(240, 235, 2)",
                    width: "100%",
                    borderRadius: 15,
                    padding: 20
                }}
                >
                
                <form style={{backgroundColor:'#f8f8f8', padding:20}} onSubmit={this.onSubmit}>
                    <fieldset className="uk-fieldset">

                        <legend className="uk-legend">Edita tu perfil</legend>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Nombre</label>
                            <div className="uk-form-controls">
                                <input onChange={this.handleChange}  required className="uk-input" id="form-stacked-text"  name='username' type="text" placeholder={user.username} />
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Apellido</label>
                            <div className="uk-form-controls">
                                <input  onChange={this.handleChange} required className="uk-input" id="form-stacked-text"  name='lastname' type="text" placeholder={user.lastname} />
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Cuentanos de ti</label>
                            <div className="uk-form-controls">
                                <textarea  onChange={this.handleChange} required class="uk-textarea" rows="5" placeholder="Textarea" name='description' placeholder={user.description}></textarea>
                                
                            </div>
                        </div>
                        <div className="uk-margin" uk-margin>
                            <div uk-form-custom="target: true">
                                <input name="image" type="file"/>
                                <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled/>
                            </div>
                          
                        </div>
                        <button class="uk-button uk-button-default">Enviar</button>

                    </fieldset>
                </form>

                </div>
            </div>
        )
    }
}

export default EditUser;