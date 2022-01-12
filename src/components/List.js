import React from 'react'
import ListItem from './ListItem'
import SortForm from './SortForm'

function List(props) {
    const songListDisplay = props.songList.filter((song) => {
        if(props.searchTerm == '') {
            return song
        } else if (song.songTitle.toLowerCase().includes(props.searchTerm.toLowerCase())) {
            return song
        } else if (song.artist.toLowerCase().includes(props.searchTerm.toLowerCase())) {
            return song
        } 
        else {
            console.log('We could not find what you were looking for..')
        }
    }).map(item => (
        <ListItem 
            item={item} 
            key={item.id}
            deleteItem={props.deleteItem}
        />
        )
    )
    
    return (
        <div className="list-container">
            <SortForm 
                handleSearch={props.handleSearch}
                filterWithSelect={props.filterWithSelect}
                />
            <table className='list'>
                <thead className="list-header">
                    <tr className="list-row"> 
                        <th className="list-header-item">Artist</th>
                        <th className="list-header-item">Song Title</th>
                        <th className="list-header-item">Genre</th>
                        <th className="list-header-item">Rating</th>
                        <th className="list-header-item">
                            <select 
                                className='form-select'
                                name="sortListBy"
                                onChange={(e) => props.sortList(e.target.value)}
                             >
                                <option value="">-- Sort list by --</option>
                                <option value="title">Song Title A-Z</option>
                                <option value="artist">Artist A-Z</option>
                                <option value="genre">Genre</option>
                                <option value="rating">Highest Rating</option>
                            </select>
                       
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.songList.length > 0 ? songListDisplay : 
                    <tr>
                        <td className='empty-message'>Your favourite songs list is currently empty</td>
                    </tr> }
                </tbody>
            </table>
        </div>
    )
}

export default List
