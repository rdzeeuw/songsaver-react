import React from 'react'

function Form(props) {
    return (
        <form className='songs-form' onSubmit={props.handleSubmitForm}>
            <h3 className='form-title'>Your favourite song:</h3>
            <hr></hr>
            <label htmlFor="songTitle">Song Title</label>
            <input 
                className="input"
                type="text" 
                name="songTitle" 
                placeholder="Enter song title"
                value={props.formData.songTitle}
                onChange={props.handleFormData}
                required
            />
            <label htmlFor="artist">Artist</label>
            <input 
                className="input"
                type="text" 
                name="artist" 
                placeholder="Enter artist name"
                value={props.formData.artist}
                onChange={props.handleFormData}
                required
            />
            <label>
                Choose a genre
                <select 
                    className='form-select'
                    name="genre"
                    value={props.formData.genre} 
                    onChange={props.handleFormData}
                    required >
                    <option value="">-- Pick a genre --</option>
                    <option value="classical">Classical</option>
                    <option value="jazz">Jazz</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                </select>
            </label>
            <label>
                Give your rating
                <select 
                    className='form-select'
                    name="rating"
                    value={props.formData.rating} 
                    onChange={props.handleFormData}
                    required >
                    <option value="">-- Choose you rating --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <hr></hr>

            <input className="submit-btn"  type="submit" value="Add song" />
        </form>
    )
}

export default Form
