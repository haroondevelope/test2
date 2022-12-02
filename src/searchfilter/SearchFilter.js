import React, { useEffect, useState } from 'react'

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState([])

    const [apiData, setApiData] = useState([])
    const fetchApi = () => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((result) => {
            setApiData(result)
            console.log(apiData)
        })
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div>
            <input type="text" placeholder='enter...' onChange={(e) => setSearchTerm(e.target.value)} />
            <div>
                {apiData.filter((val) => {
                    if (searchTerm == "") {
                        return val;
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((val) => {
                    return (
                        <p key={val.id}>{val.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchFilter
