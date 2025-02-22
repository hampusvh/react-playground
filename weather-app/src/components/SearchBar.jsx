import {useState} from "react";

function SearchBar ({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            onSearch(searchTerm);
        }
    };

    return (
        <div>
            <input type="text"
            placeholder="...search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <button
            onClick={handleSearch}>Search</button>
            
        </div>
    );

}

export default SearchBar;