import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-from/employees-add-from";

import './app.css'
class  App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            maxId: 2,
            data : [
                {id: 1, name: 'Dimashka T.', salary: 800, increase: true, like: false},
                {id: 2, name: 'Nazym  T.', salary: 2800, increase: false, like: false},

            ]
        }

    }

    deleteItem = (id) => {
        this.setState(({data, maxId}) => {
            let index = data.findIndex(elem => elem.id == id)
            let before = data.slice(0, index)
            let after = data.slice(index + 1)

            const newData = [...before, ...after]

            return {
                data: newData,
                maxId: maxId -1
            }
        })
    }

    addItem = (person) => {

        this.setState(({data, maxId}) => {
            person.id = maxId + 1
            person.increase = false
            person.like = false
            let newData = [...data, person]
            return {
                data: newData,
                maxId: maxId + 1
            }
        })
    }

    render() {
        return(

            <div className={'app'}>
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={this.state.data}
                               onDelete={id=>this.deleteItem(id)}/>

                <EmployeesAddForm onAdd={person => this.addItem(person)}/>

            </div>
        )
    }


}

export default App