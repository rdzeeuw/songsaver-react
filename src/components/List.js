import React from 'react'
import ListItem from './ListItem'

function List(props) {
    const songListDisplay = props.songList.filter((song) => {
        if(props.searchTerm == '') {
            return song
        } else if (song.songTitle.toLowerCase().includes(props.searchTerm.toLowerCase())) {
            return song
        } else if (song.artist.toLowerCase().includes(props.searchTerm.toLowerCase())) {
            return song
        } else {
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
        <div className="list">
            <div className='main-header'>
                <h3>Your favourite songs!</h3>
                <div className="sort-by">
                    <label htmlFor="sort" className="sort-title">Sort by genre</label>
                    <select 
                        className="sort-select"
                        onChange={props.sortGenres}
                        name="genre"
                        // value={props.songListDisplay.genre} 
                        required
                        >
                        <option value="">-- Pick a genre --</option>
                        <option value="classical">Classical</option>
                        <option value="jazz">Jazz</option>
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                    </select>
                </div>
                <div className="sort-by">
                    <label htmlFor="sort" className="sort-title">Sort by rating</label>
                    <select 
                        className="sort-select"
                        onChange={props.sortRatings}
                        name="rating"
                        // value={props.songListDisplay.genre} 
                        required
                        >
                        <option value="">-- Pick a rating --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <input 
                    type="text" 
                    placeholder="Search..."
                    onChange={props.handleSearch}/>
            </div>
            <table className='list'>
                <thead className="list-header">
                    <tr> 
                        <th className="list-header-item">Song Title</th>
                        <th className="list-header-item">Artist</th>
                        <th className="list-header-item">Genre</th>
                        <th className="list-header-item">Rating</th>
                        <th className="list-header-item delete-item"></th>
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
