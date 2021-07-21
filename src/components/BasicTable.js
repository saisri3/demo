import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';


export const BasicTable = () => {


    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(( ) => MOCK_DATA,[])


    const tableInstance= useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } =tableInstance




    return (

        <table {...getTableProps()}>
            
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{ cell.render("cell")}</td>
                            }
                            )}
                            
                        </tr>
                    )
                }
                )}
                

            </tbody>

        </table>
        
    )
}


