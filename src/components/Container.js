import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
import Form from './Form'
import List from './List'

function Container() {
    // state ----------------------------------------------
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
    const [genre, setGenre] = useState('') 
    const [rating, setRating] = useState('') 
    const [searchTerm, setSearchTerm] = useState('')

    // Add song via form -----------------------------------
    function handleFormData(event) {
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    // submitting the form and add to state -----------------
    function handleSubmitForm(event) {
        event.preventDefault()
       
       const newSong = {
            id: nanoid(),
            title: formData.title,
            artist: formData.artist,
            genre: formData.genre,
            rating: formData.rating
       }
       
       const newSongs = [...songList, newSong]
       setSongList(newSongs)
    }

    // delete song from list via delete-button ---------------------------
    function deleteItem(songId) {
        const newSongs = [...songList]

        const index = songList.findIndex((song) => song.id === songId)
        newSongs.splice(index, 1)

        setSongList(newSongs)
    }

    // filter list by genre, rating and search input----------------
    function filterByGenre(event) {
        const value = event.target.value
        setGenre(value)
    }

    function filterByRating(event) {
        const value = event.target.value
        setRating(value)
    }  

    function handleSearch(event) {
        const value = event.target.value
        setSearchTerm(value)
    }

    // sort by title, artist, genre, rating --------------------------
    const [sortType, setSortType] = useState('artist')

    useEffect(() => { 
        const sortList = type => {
            const types = {
            title: 'title',
            titleDesc: 'titleDesc',
            artist: 'artist',
            artistDesc: 'artistDesc',
            genre: 'genre',
            rating: 'rating'
            }
            
            const sortProperty = types[type];
            if(!type){
                const sorted = [...songList]
                setSongList(sorted)
            }
            else if(type === 'rating' || type === 'artistDesc' || type === 'titleDesc') {
                const sorted = [...songList].sort((a, b) => {
                    return b[sortProperty] > a[sortProperty] ? 1 : -1
                })
                setSongList(sorted);
            } else {
                const sorted = [...songList].sort((a, b) => {
                    return b[sortProperty] < a[sortProperty] ? 1 : -1
                })
                setSongList(sorted);
            }
        }

        sortList(sortType)
    }, [sortType])
    // ----------------------------- render -------------------------------
    return (
        <main className="container">
            <Form 
                 handleFormData={handleFormData}
                 handleSubmitForm={handleSubmitForm}
                 formData={formData} 
            />
            <List 
                songList={songList}
                genre={genre}
                rating={rating}
                filterByGenre={filterByGenre}
                filterByRating={filterByRating}
                deleteItem={deleteItem}
                handleSearch={handleSearch}
                searchTerm={searchTerm}
            />
        </main>
    )
}

export default Container
