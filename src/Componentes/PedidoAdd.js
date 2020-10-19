import Axios from 'axios';
import React, { Component } from 'react';


class PedidoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { id: null, destinatario: "", pedido: "", fecha: new Date() }
    }

    handleSubmit(){
        Axios.post("http://localhost:3001/pedidos", this.state).then((resp) => {

        
            //TODO reemplazar por react router redirect
            window.location = "/list";
        })
    }
    render() {
        return (<form>
            Destinatario:
            <input type="text" className="form-control" onChange={(e) => {
                this.setState({destinatario:e.target.value})
            }}></input>
        Pedido:
            <input type="text" className="form-control"onChange={(e) => {
                this.setState({pedido:e.target.value})
            }}></input>
        Fecha:
            <input type="date" className="form-control"onChange={(e) => {
                this.setState({fecha:e.target.value})
            }}></input>
            <button type="button" className="btn btn-primary -btn-block mt-3" onClick={this.handleSubmit.bind(this)}>
                Pedir
        </button>
        
        {JSON.stringify(this.state)}
        </form>);
    }
}

export default PedidoAdd;