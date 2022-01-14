import SingleCard from "../components/SingleCard"

const Homepage = () => {

    return (
        <div className="home-wrap">
            <h2>Made for you</h2>

            <h2>Recently played</h2>
            <SingleCard src={"http://placehold.it/200x200"} />
        </div>
    )
}

export default Homepage