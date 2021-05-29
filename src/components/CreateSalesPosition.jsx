import React, { Component } from 'react'
import SalesService from '../services/SalesService';

export class CreateSalesPosition extends Component {

    constructor(props) {
        super(props)


        this.state = {
            item: '',
            quantity: '',
            amount: ''
        }
        this.changeItem = this.changeItem.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.changeAmount = this.changeAmount.bind(this);

        this.saveSales = this.saveSales.bind(this);
    }

    changeItem = (e) => {
        this.setState({ item: e.target.value })
    }


    changeQuantity = (e) => {
        this.setState({ quantity: e.target.value })
    }
    changeAmount = (e) => {
        this.setState({ amount: e.target.value })
    }

    saveSales = (e) => {
        e.preventDefault();
        let salesposition = { item: this.state.item, quantity: this.state.quantity, amount: this.state.amount };
        console.log('salesposition => ' + JSON.stringify(salesposition));

        SalesService.createSalesPosition(salesposition).then(res=>{
            this.props.history.push('/sales');
        })
        window.location.reload(false);


    }

    cancel() {
        this.props.history.push('/sales');
    }







    render() {
        return (
            <div>

                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                /* this.getTitle() */
                            }
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label> Item: </label>
                                        <input type="text" placeholder="Item" name="item" className="form-control"
                                            value={this.state.item} onChange={this.changeItem} />

                                    </div>
                                    <div className="form-group">
                                        <label> Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control"
                                            value={this.state.quantity} onChange={this.changeQuantity} />
                                    </div>
                                    <div className="form-group">
                                        <label> Amount: </label>
                                        <input placeholder="Amount" name="amount" className="form-control"
                                            value={this.state.amount} onChange={this.changeAmount} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveSales}>Save</button>

                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default CreateSalesPosition
