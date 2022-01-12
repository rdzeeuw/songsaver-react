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
        },
        {
            id: 5,
            songTitle: 'Teenage Wasteland',
            artist: 'The Wo',
            genre: 'rock',
            rating: 5
        }
    ])

    const [formData, setFormData] = useState([
        {
            songTitle: '',
            artist: '',
            genre: '',
            rating: ''
        }
    ])

    const [searchTerm, setSearchTerm] = useState('')
    const [sortedList, setSortedList] = useState([])
    const [filteredList, setFilteredList] = useState([])

// functionality to add song via form
    function handleFormData(event) {
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmitForm(event) {
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

// delete song from list via button
    function deleteItem(songId) {
        const newSongs = [...songList]

        const index = songList.findIndex((song) => song.id === songId)
        newSongs.splice(index, 1)

        setSongList(newSongs)
    }

// functionality to filter list by genre and search input
    function filterWithSelect(type) {
        const genreTypes = {
            classical: 'classical',
            jazz: 'jazz',
            pop: 'pop',
            rock: 'rock'
          }

        const genre = genreTypes[type];
        
        // const filteredGenres = [...songList].filter((song) => song.genre === genre);
        
    }

    function handleSearch(event) {
        const value = event.target.value
        setSearchTerm(value)
    }

// functionality to sort by title, asrtist, genre, rating

    const sortList = type => {
        const types = {
          title: 'title',
          artist: 'artist',
          genre: 'genre',
          rating: 'rating'
        }
        const sortProperty = types[type];
        const sorted = [...songList].sort((a, b) => b[sortProperty] - a[sortProperty]);
        console.log(sorted)
        setSortedList(sorted);
        // console.log(sortedList);
      }
    

    return (
        <main className="container">
            <Form 
                 handleFormData={handleFormData}
                 handleSubmitForm={handleSubmitForm}
                 formData={formData} 
            />
            <List 
                songList={songList} 
                deleteItem={deleteItem}
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                filteredList={filteredList}
                sortList={sortList}
                filterWithSelect={filterWithSelect}
            />
        </main>
    )
}

export default Container
