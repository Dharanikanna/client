import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Developers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/developers/getall')
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
                style={{ height: '350px', width: '40%', textAlign: 'center' }}
            >
                <AgGridReact
                    pagination={true}
                    paginationPageSize = {10}
                    defaultColDef={{sortable: true, filter: true }}
                    rowData={this.state.rowData}>
                    <AgGridColumn field="id" sortable={ true }></AgGridColumn>
                    <AgGridColumn field="name" sortable={ true }></AgGridColumn>
                    <AgGridColumn field="projects"></AgGridColumn>
     
                </AgGridReact>
            </div>
          </div>

        );
    }
}

  export default Developers



  // https://blog.ag-grid.com/react-get-started-with-react-grid-in-5-minutes/