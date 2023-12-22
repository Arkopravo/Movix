import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./style.scss"

const HeroBanner = () => {
    const [background, setBackgroung] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);   
        }
    };

  return (
    <div className="heroBanner">
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="subTitle">Millions of movies, TV show and people to discover. Explore now.</span>
                <div className="searchInput">
                    <input type="text" placeholder='Search for a movie or tv show...' 
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}/>
                    <button>Search</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroBanner
