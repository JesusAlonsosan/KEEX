import React,{Component} from 'react'
import { editProfile } from '../../services/auth';
import { getCategories } from '../../services/categories';
import { addProduct } from '../../services/products';


class AddProducts extends Component {
    state={
        user:{},
        data:{},
        category:[],
    }
    handleChange=(e)=>{
        let {data}=this.state
        let {name,value}=e.target
        if (e.target.files) {
            data.image = e.target.files
            console.log('dataaaa',data)
            return this.setState({ data })
          }
        data[name]=value
        this.setState({data})
    }
    onSubmit=e=>{
        let{data,user}=this.state
        e.preventDefault()
        data['_owner']=user._id
        console.log('asdasdsad',data)

        addProduct(data).then(res=>{
            //this.props.history.push('/profile')
        }).catch(err=>console.log(err))
    }
    getAllData=()=>{
        getCategories().then(res=>this.setState({category:res.category})).catch(err=>console.log(err))
      }
    componentWillMount(){
        let user = JSON.parse(localStorage.getItem("USER"))
        if(!user){
            this.props.history.push('/')
        }else{
            this.setState({user})
            this.getAllData()
        }
    }
    render(){
        let{user,category}=this.state
        return(
            <div style={{ backgroundColor: "#fefe3b", padding: 60 }}>
                <div
                style={{
                    backgroundColor: "#fefe3b",
                    width: "100%",
                    borderRadius: 15,
                    padding: 20
                }}
                >
                
                <form style={{backgroundColor:'#f8f8f8', padding:20}} onSubmit={this.onSubmit}>
                    <fieldset className="uk-fieldset">

                        <legend className="uk-legend">Agrega un Producto</legend>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Nombre</label>
                            <div className="uk-form-controls">
                                <input onChange={this.handleChange}  required className="uk-input" id="form-stacked-text"  name='name' type="text" placeholder='Escribe un nombre' />
                            </div>
                        </div>
                        <div className="uk-margin">
                           
                            <div uk-form-custom="target: true">
                                <select>
                                    <option value="1">Selecciona una categoria</option>
                                    {category.length ? category.map((data,i)=>
                                        <option value={data._id} key={i} >{data.name}</option>)
                                        :
                                    <option>Option 02</option>}
                                </select>
                                <span></span>
                            </div>
                        </div>
                        
                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Describe tu producto</label>
                            <div className="uk-form-controls">
                                <textarea  onChange={this.handleChange} required class="uk-textarea" rows="5" placeholder="Textarea" name='description' placeholder={'Hablanos sobre tu producto que lo hace especial'}></textarea>
                                
                            </div>
                        </div>
                        <div className="uk-margin" uk-margin>
                            <div uk-form-custom="target: true">
                                <input name="image" onChange={this.handleChange} type="file" multiple/>
                                <input class="uk-input uk-form-width-medium" type="text" placeholder="Sube su imagen" disabled/>
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

export default AddProducts;