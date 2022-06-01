
function PersonList(props) {


    let personListDiv = props.persons.map((item, i) =>
        <div key={i} className={'person_item'}>
            <span>{item.name}</span>
            <span> {item.age} </span>
            <span>{item.gpa}</span>
            <button onClick={() => props.deletePerson(item.id)}>Delete</button>
        </div>
    )


    return (
        <div className="PersonList">
            {personListDiv}
        </div>
    );
}

export default PersonList;


//key
//typescript
