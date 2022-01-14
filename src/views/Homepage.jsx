import SingleCard from "../components/SingleCard"
import { useState, useEffect } from "react"
import { fetchMusic } from "../apicalls"

const Homepage = () => {

    const [daftPunk, setDaftPunk] = useState([])
    const [disclosure, setDisclosure] = useState([])
    useEffect(() => {
        fetchMusic('daft punk').then((res) => setDaftPunk(res))
        fetchMusic('disclosure').then((res) => setDisclosure(res))
    }, [])

    return (
        <div className="home-wrap">
            <h2>Made for you</h2>
            <div className="cards-wrap">
                {daftPunk && daftPunk.slice(0, 5).map((music) => <SingleCard src={music.album.cover_medium} key={music.id} />)}
            </div>
            <h2>Recently played</h2>
            <div className="cards-wrap">
                {disclosure && disclosure.slice(0, 5).map((music) => <SingleCard src={music.album.cover_medium} key={music.id} />)}
            </div>
        </div>
    )
}

export default Homepage