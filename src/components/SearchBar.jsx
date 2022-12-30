import React from "react";

const SearchBar = ({setSearch}) =>{

    return(
        <div className="d-flex justify-content-between mt-4 p-4 bg-dark">
            <label className="text-white h3" htmlFor="Buscador de colaboradores" >Buscador de Colaboradores</label>
            <input className="form-control inputSearch" name="Buscador de colaboradores" placeholder="...búsqueda por nombre" type="text" onChange={e => setSearch(e.target.value)} />

        </div>
    )
}

export default SearchBar