import {useEffect, useState} from "react"
// create your App component here
function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();


    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result.message);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
        return <p>"Loading..."</p>;
    } else{
        return (
            <>
                <img src={items} alt="A Random Dog"></img>
            </>
        );
    }
    
}

export default App