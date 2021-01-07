import React, { Component } from 'react'

//Bootstrap and jQuery libraries
import 'jquery/dist/jquery.min.js';

import $ from 'jquery';

// Import datatables and the required plugins, using the bootstrap 4 styling
import 'datatables.net-bs4';
import 'datatables.net-select-bs4';

class DataTable extends Component {

    // State array variable to save and show data
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }


    componentDidMount() {
        //initialize datatable
        $(document).ready(function () {
           $('#example').DataTable({
                select: true,
                autoFill: true,
                responsive: true
            });
        });
    }

    objectIntoTableData(object) {
        
        return Object.values(object).map((data, index) => {
            return <td key={index}>{data}</td>
        });
    }


    renderTableData = () => {
        const { tabledata} = this.props;
        return tabledata.map((value, i) => {
            return <tr key={i}>{this.objectIntoTableData(value)}</tr>;
        });
    }

    renderHeader = () => {
        const { headers } = this.props;
        return headers.map((res, i) => {
            return (<th key={i}>{res}</th>)
        })
    }

    render() {
        return (
            <div>
                <table id="example" className="table table-responsive-sm table-striped table-bordered">
                    <thead>
                        <tr>
                            {this.renderHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable;