import React from 'react'
import ListItem from './ListItem'
import SortForm from './SortForm'

function List(props) {
    
    const songListDisplay = props.sortedSongs.filter((song) => {
        if(props.genre === ''){
            return song
        } else if(song.rating === props.rating){
            return song 
        } else if(song.genre === props.genre){
            return song
        } else {
            return ''
        }
    }).filter((song) => {
        if(props.searchTerm === '') {
            return song
        } else if (song.title.toLowerCase().includes(props.searchTerm.toLowerCase())) {
            return song
        } else if (song.artist.toLowerCase().includes(props.searchTerm.toLowerCase())) {
            return song
        } else {
            return ''
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
                filterByGenre={props.filterByGenre}
                filterByRating={props.filterByRating}
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
                                onChange={(e) => props.setSortType(e.target.value)}
                             >
                                <option name="" value="">-- Sort list by --</option>
                                <option name="title" value="title">Song Title A-Z</option>
                                <option name="artist" value="artist">Artist A-Z</option>
                                <option name="genre" value="genre">Genre</option>
                                <option name="rating" value="rating">Highest Rating</option>
                            </select>
                       
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.sortedSongs.length > 0 ? songListDisplay : 
                    <tr>
                        <td className='empty-message'>Your favourite songs list is currently empty</td>
                    </tr> }
                </tbody>
            </table>
        </div>
    )
}

export default List
