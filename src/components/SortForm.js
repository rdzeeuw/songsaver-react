import React from 'react'

function SortForm(props) {
    return (
        <div className='sort-form'>
                <h3>Your favourite songs!</h3>
                <div className="sort-by">
                    <div className="sort-input">
                        <label htmlFor="sort" className="sort-title">Filter by genre</label>
                        <select 
                            className='form-select'
                            onChange={(e) => props.filterWithSelect(e.target.value)}
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
                    <div className="sort-input">
                        <label htmlFor="sort" className="sort-title">Filter by rating</label>
                        <select 
                            className='form-select'
                            onChange={(e) => props.filterWithSelect(e.target.value)}
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
                    <div className="sort-input">
                        <label htmlFor="sort" className="sort-title">Search for songs/artists</label>
                        <input 
                            className="input"
                            type="text" 
                            placeholder="Search..."
                            onChange={props.handleSearch}/>
                    </div>
                </div>
            </div>
    )
}

export default SortForm
