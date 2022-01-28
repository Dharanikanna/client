import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Health extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/diabetic/getall?page=1&limit=25')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }

    render() {
        return (
            <div className="container">
            {/* <header style={{ height: '50px', width: '100%' }}> Healthcare Data</header> */}
            <h1 style={{ height: '50px', width: '100%', textAlign:'center'}}> Healthcare Data</h1>

            <div
                className="ag-theme-balham"
                style={{ height: '700px', width: '100%', textAlign: 'center' }}
            >
                <AgGridReact
                    pagination={true}
                    paginationPageSize = {22}
                    defaultColDef={{sortable: true, filter: true }}
                    rowData={this.state.rowData}>
                    <AgGridColumn field="encounter_id" sortable={ true }></AgGridColumn>
                    <AgGridColumn field="patient_nbr" sortable={ true }></AgGridColumn>
                    <AgGridColumn field="race"></AgGridColumn>
                    <AgGridColumn field="gender"></AgGridColumn>
                    <AgGridColumn field="age"></AgGridColumn>
                    <AgGridColumn field="weight"></AgGridColumn>
                    <AgGridColumn field="diag_1"></AgGridColumn>
                    <AgGridColumn field="diag_2"></AgGridColumn>
                    <AgGridColumn field="diag_3" filter={ true }></AgGridColumn>
                    <AgGridColumn field="number_diagnoses"></AgGridColumn>
                    <AgGridColumn field="A1Cresult"></AgGridColumn>
                    <AgGridColumn field="metformin"></AgGridColumn>
                    <AgGridColumn field="repaglinide"></AgGridColumn>
                    <AgGridColumn field="nateglinide"></AgGridColumn>
                    <AgGridColumn field="chlorpropamide"></AgGridColumn>
                </AgGridReact>
            </div>
          </div>

        );
    }
}

  export default Health



  // https://blog.ag-grid.com/react-get-started-with-react-grid-in-5-minutes/

  //lazy-loading = https://www.tutorialspoint.com/lazy-loading-in-reactjs