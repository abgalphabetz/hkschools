import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AgGridReact } from 'ag-grid-react';
import { GridApi } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import { State } from '../../store';
import { actions } from './Actions';
import { SchoolFeature } from './SchoolListEpic';


class SchoolList extends React.Component<{ schoolList: SchoolFeature[], fetch: () => void }, { columnDefs: Array<any>, defaultColDef: any }> {
    gridApi: GridApi | undefined

    constructor(props: { schoolList: SchoolFeature[], fetch: () => void }) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: "GMID", field: "properties.GMID", checkboxSelection: true },
                { headerName: "Dataset", field: "properties.Dataset" },
                { headerName: "Facility Name", field: "properties.Facility Name" },
                { headerName: "Address", field: "properties.Address" },
                { headerName: "Students Gender", field: "properties.Students Gender" },
                { headerName: "Session", field: "properties.Session" },
                { headerName: "District", field: "properties.District" },
                { headerName: "School Level", field: "properties.School Level" },
                { headerName: "Finance Type", field: "properties.Finance Type" },
                { headerName: "Religion", field: "properties.Religion" },
                { headerName: "Telephone", field: "properties.Telephone" },
                { headerName: "Fax Number", field: "properties.Fax Number" },
                { headerName: "Website", field: "properties.Website" },
                { headerName: "SCHOOL NO.", field: "properties.SCHOOL NO." },
                { headerName: "Last Update", field: "properties.Last Update" }
            ],
            defaultColDef: { sortable: true, filter: true }
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
                    // groupSelectsChildren={true}
                    onGridReady={(params) => this.gridApi = params.api}
                    rowSelection="multiple"
                    columnDefs={this.state.columnDefs}
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