import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

function EmployeesList({data, onDelete}){

    const elems = data.map(item =>{
        const {id , ...itemProps} = item
        return (


            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem key={id}
                               {...itemProps}
                                onDelete={() => onDelete(id)}/>

        )
    })


    return(
        <ul className={'app-list list-group'}>
            {elems}
        </ul>
    )
}

export default EmployeesList
