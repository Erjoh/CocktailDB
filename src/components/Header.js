import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${search}`)
        }
    }
    return (
        <header>
            <h3>
                <Link to={'/'}>Karaoke-Bar Zapoi</Link>
            </h3>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About us</Link>
                <Link to={'/popular'}>Popular</Link>
                <Link to={'/alcoholic'}>Alcoholic</Link>
                <Link to={'/non_alcoholic'}>Non alcoholic</Link>
            </nav>
            <div className={'searchArea'}>
                <input className={'searchInput'} onChange={(e) => setSearch(e.target.value)}
                       placeholder={'name of cocktail'} type={'text'} onKeyPress={handleSearch}/>
                <button className={'searchBtn'} onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
};

export default Header;