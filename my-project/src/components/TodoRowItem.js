function TodoRowItem(props){

    const rowNumber = 1;
    const rowDescription = "Feed dog";
    const rowAssigned = "Eric"
    


    return(
        <div>
        <tr>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>  
        </div>
    )
}
export default TodoRowItem;