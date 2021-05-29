import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import SalesService from '../services/SalesService';


function ListSalesCompent() {

    const history = useHistory();

    const [sales, setSales] = React.useState([]);

    const url = "http://127.0.0.1:8080/api/v1/sales";



    React.useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(sales => setSales(sales))
            .catch(err => console.log(err.message));
    }, []);



    function addSales() {
        history.push("/create");

    }

    function editSales(id) {
        history.push(`/update/${id}`)
        window.location.reload(false);


    }

    function deleteSales(id) {
        SalesService.deleteSales(id);
        window.location.reload(false);

    }


    return (
        <div>

            <h2 className="text-center">Sales List</h2>
            <div className="row">
                <button className="btn btn-primary" type="button" onClick={addSales}>Add Sales</button>

            </div>

            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Sales Item</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>
                        {sales.map(
                            e =>
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.item}</td>
                                    <td>{e.quantity}</td>
                                    <td>{e.amount}</td>
                                    <td>
                                        <button onClick={() => editSales(e.id)} className="btn btn-info">Update </button>

                                        <button style={{ marginLeft: "10px" }} onClick={() => deleteSales(e.id)} className="btn btn-danger">Delete </button>
                                        {/* <button style={{ marginLeft: "10px" }} onClick={() => this.viewSales(e.id)} className="btn btn-info">View </button> */}

                                    </td>


                                </tr>
                        )}

                    </tbody>


                </table>



            </div>



        </div>
    )
}

export default ListSalesCompent
