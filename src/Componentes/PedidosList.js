import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

class PedidosList extends Component {
    constructor(props) {
        super(props);
        //TODO modificar para hacer el redux con hooks
        this.state = { pedidos: [] }
    }

    componentDidMount() {
        //TODO modificar para levantar por config externalizada
        axios.get("http://localhost:3001/pedidos").then((resp) => {
            this.setState({ pedidos: resp.data })
        })
    }

    render() {
        let {pedidos} = this.state;
        return (<table className="table">
            <thead>
                <tr>
                    <th>Destinatario</th>
                    <th>Pedido</th>
                    <th>Fecha</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    pedidos.map((item) => (
                        <tr>
                            <td>{item.destinatario}</td>
                            <td>{item.pedido}</td>
                            <td>{item.fecha}</td>
                            <td></td>
                        </tr>
                    ))
                }
            </tbody>


        </table>);
    }
}

export default PedidosList;