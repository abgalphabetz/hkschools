import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './makerAction'
import { State, Maker } from './store';

interface MainTableProps {
    makers: Maker[],
    fetchMakers: () => void
}

interface MainTableState {
    columnDefs: any[],
    autoGroupColumnDef: any
}

class MainTable extends React.Component<MainTableProps, MainTableState> {
    gridApi: GridApi | undefined

    constructor(props: any) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: "Make", field: "make", sortable: true, filter: true, checkboxSelection: true },
                { headerName: "Model", field: "model", sortable: true, filter: true },
                { headerName: "Price", field: "price", sortable: true, filter: true }
            ],
            autoGroupColumnDef: {
                headerName: "Model",
                field: "model",
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: {
                    checkbox: true
                }
            }  
        }
    }

    componentDidMount() {
        // fetch('https://api.myjson.com/bins/ly7d1')
        //     .then(result => result.json())
        //     .then(rowData => this.setState({ rowData }))
        this.props.fetchMakers();
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{ height: '800px', width: '100%' }}
            >
                <button onClick={this.onClickOfSelectedRowsButton}>Get Selected Rows</button>
                <AgGridReact
                    groupSelectsChildren={true}
                    // autoGroupColumnDef={this.state.autoGroupColumnDef}
                    onGridReady={(params) => this.gridApi = params.api}
                    rowSelection="multiple"
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.makers}
                >
                </AgGridReact>
            </div>
        );
    }

    onClickOfSelectedRowsButton = (e: any) => {
        const selectedNodes = (this.gridApi && this.gridApi.getSelectedNodes()) || []
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
}


const mapStateToProps = (state: State) => ({
    makers: state.makers
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchMakers: bindActionCreators(actions.fetchMakers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);