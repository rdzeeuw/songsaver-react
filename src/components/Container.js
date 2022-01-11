import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import Form from './Form'
import List from './List'

function Container() {
    const [songList, setSongList] = useState([
        {
            id: 1,
            songTitle: 'Yesterday',
            artist: 'The beatles',
            genre: 'pop',
            rating: 4
        },
        {
            id: 2,
            songTitle: 'St Matthew Passion',
            artist: 'J.S. Bach',
            genre: 'classical',
            rating: 5
        },
        {
            id: 3,
            songTitle: 'My Funny Valentine',
            artist: 'Ella Fitzgerald',
            genre: 'jazz',
            rating: 3
        },
        {
            id: 4,
            songTitle: 'Litheum',
            artist: 'Nirvana',
            genre: 'rock',
            rating: 2
        }
    ])
// console.log(songList)

    const [formData, setFormData] = useState([
        {
            songTitle: '',
            artist: '',
            genre: '',
            rating: ''
        }
    ])

    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // create new song object
       const newSong = {
            id: nanoid(),
            songTitle: formData.songTitle,
            artist: formData.artist,
            genre: formData.genre,
            rating: formData.rating
       }
       // create new array with new song
       const newSongs = [...songList, newSong]
       setSongList(newSongs)
    }

function deleteItem(songId) {
    const newSongs = [...songList]

    const index = songList.findIndex((song) => song.id === songId)
    newSongs.splice(index, 1)

    setSongList(newSongs)
}

function sortGenres(event) {
    const selected = event.target.value
    
    const filterdGenres = songList.filter(item => item.genre === selected )
    console.log(filterdGenres)
}

function handleSearch(event) {
    const value = event.target.value
    setSearchTerm(value)
}

    return (
        <main className="container">
            <Form 
                 handleChange={handleChange}
                 handleSubmit={handleSubmit}
                 formData={formData} 
            />
            
            <List 
                songList={songList} 
                deleteItem={deleteItem}
                sortGenres={sortGenres}
                handleSearch={handleSearch}
                searchTerm={searchTerm}
            />
        </main>
    )
}

export default Container
