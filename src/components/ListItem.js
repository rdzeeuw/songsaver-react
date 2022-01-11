import React from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";

function ListItem(props) {
    return (
        <tr className="list-row">
            <th className="list-item">{props.item.songTitle}</th>
            <th className="list-item">{props.item.artist}</th>
            <th className="list-item">{props.item.genre}</th>
            <th className="list-item">{props.item.rating}</th>
            <th className="list-item delete-item">
                <RiDeleteBack2Fill 
                    className="dlt-btn" 
                    onClick={() => props.deleteItem(props.item.id)}
                    
                />
            </th>
        </tr>
    )
}

export default ListItem
