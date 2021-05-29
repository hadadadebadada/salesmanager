import React, { Component } from 'react'

import axios from 'axios';

const SALES_API_BASE_URL = "http://localhost:8080/api/v1/sales"

class SalesService extends Component {
   

    //alternative to load all data into class component
  /*   getSales(){
        return axios.get(SALES_API_BASE_URL);
    }
 */
    createSalesPosition(salesposition){
        return axios.post(SALES_API_BASE_URL, salesposition);
    }
    getSalesById(salesId){
        return axios.get(SALES_API_BASE_URL+'/'+salesId);
    }
    updateSales(sales, salesId){
        return axios.put(SALES_API_BASE_URL + '/' + salesId, sales);
    }
    deleteSales(salesId){
        return axios.delete(SALES_API_BASE_URL + '/' + salesId);
    }

}

export default new SalesService
