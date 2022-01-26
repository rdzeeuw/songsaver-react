import React from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";

function ListItem(props) {
    return (
        <tr className="list-row">
            <td className="list-item">{props.item.artist}</td>
            <td className="list-item">{props.item.title}</td>
            <td className="list-item">{props.item.genre}</td>
            <td className="list-item">{props.item.rating}</td>
            <td className="list-item delete-item">
                <RiDeleteBack2Fill 
                    className="dlt-btn" 
                    onClick={() => props.deleteItem(props.item.id)}
                    
                />
            </td>
        </tr>
    )
}

export default ListItem
