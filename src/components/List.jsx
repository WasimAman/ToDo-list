function List(props){
    return(
        <li>{props.text}<i onClick={()=>{
            props.onSelect(props.id);
        }} className="fas fa-times cancel-icon"></i></li>
    )
}

export default List;