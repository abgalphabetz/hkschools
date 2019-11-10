import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AgGridReact } from 'ag-grid-react';
import { GridApi } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import { State } from '../../store';
import { actions } from './actions';
import { School } from './schools.d';


class SchoolList extends React.Component<{ schoolList: School[], fetch: () => void }, { columnDefs: Array<any>, defaultColDef: any }> {
    gridApi: GridApi | undefined

    constructor(props: { schoolList: School[], fetch: () => void }) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: "GMID", field: "gmid", checkboxSelection: true },
                { headerName: "Dataset", field: "dataset" },
                { headerName: "Name", field: "name" },
                { headerName: "Address", field: "address" },
                { headerName: "Students Gender", field: "studentsGender" },
                { headerName: "Session", field: "session" },
                { headerName: "District", field: "district" },
                { headerName: "School Level", field: "schoolLevel" },
                { headerName: "Finance Type", field: "financeType" },
                { headerName: "Religion", field: "religion" },
                { headerName: "Telephone", field: "telephone" },
                { headerName: "Fax Number", field: "faxNumber" },
                { headerName: "Website", field: "website" },
                { headerName: "School No.", field: "schoolNumber" },
                { headerName: "Last Update", field: "lastUpdate" }
            ],
            defaultColDef: { 
                width: 100,
                resizable: true,
                sortable: true, 
                filter: true 
            }
        }
    }

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{ height: '800px', width: '100%' }}
            >
                <AgGridReact
                    groupSelectsChildren={true}
                    onGridReady={(params) => this.gridApi = params.api}
                    rowSelection="multiple"
                    columnDefs={this.state.columnDefs}
                    defaultColDef={this.state.defaultColDef}
                    rowData={this.props.schoolList}
                >
                </AgGridReact>
            </div>
        );

    }

}



const mapStateToProps = (state: State) => ({
    schoolList: state.schoolList
});

const mapDispatchToProps = (dispatch: any) => ({
    fetch: bindActionCreators(actions.fetch, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolList);