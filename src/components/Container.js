import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
import Form from './Form'
import List from './List'

function Container() {
    const [songList, setSongList] = useState([
        {
            id: 1,
            title: 'Yesterday',
            artist: 'The beatles',
            genre: 'pop',
            rating: 4
        },
        {
            id: 2,
            title: 'St Matthew Passion',
            artist: 'J.S. Bach',
            genre: 'classical',
            rating: 5
        },
        {
            id: 3,
            title: 'My Funny Valentine',
            artist: 'Ella Fitzgerald',
            genre: 'jazz',
            rating: 3
        },
        {
            id: 4,
            title: 'Litheum',
            artist: 'Nirvana',
            genre: 'rock',
            rating: 2
        },
        {
            id: 5,
            title: 'Teenage Wasteland',
            artist: 'The Who',
            genre: 'rock',
            rating: 5
        }
    ])

    const [formData, setFormData] = useState([])
    const [sortedSongs, setSortedSongs] = useState([])

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
            title: formData.title,
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
        const newSongs = [...sortedSongs]

        const index = sortedSongs.findIndex((song) => song.id === songId)
        newSongs.splice(index, 1)

        setSortedSongs(newSongs)

    }

    // functionality to filter list by genre and search input
    const [searchTerm, setSearchTerm] = useState('')
        
    function handleSearch(event) {
        const value = event.target.value
        setSearchTerm(value)
    }

    const [genre, setGenre] = useState('') 
    const [rating, setRating] = useState('') 

    function filterByGenre(event) {
        const value = event.target.value
        setGenre(value)
    }

    function filterByRating(event) {
        const value = event.target.value
        setRating(value)
    }  

    // functionality to sort by title, artist, genre, rating
    const [sortType, setSortType] = useState('artist')

    useEffect(() => { 
        const sortList = type => {
            const types = {
            title: 'title',
            artist: 'artist',
            genre: 'genre',
            rating: 'rating'
            }
            
            const sortProperty = types[type];
            if(!type){
                const sorted = [...songList]
                setSortedSongs(sorted)
            }
            else if(type === 'rating') {
                const sorted = [...songList].sort((a, b) => {
                    return b[sortProperty] > a[sortProperty] ? 1 : -1
                })
                setSortedSongs(sorted);
            } else {
                const sorted = [...songList].sort((a, b) => {
                    return b[sortProperty] < a[sortProperty] ? 1 : -1
                })
                setSortedSongs(sorted);
            }
        }

        sortList(sortType)
    }, [sortType])
    
    return (
        <main className="container">
            <Form 
                 handleFormData={handleFormData}
                 handleSubmitForm={handleSubmitForm}
                 formData={formData} 
            />
            <List 
                genre={genre}
                rating={rating}
                filterByGenre={filterByGenre}
                filterByRating={filterByRating}
                deleteItem={deleteItem}
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                sortedSongs={sortedSongs}
                setSortType={setSortType}
            />
        </main>
    )
}

export default Container
