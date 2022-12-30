import React from "react"
import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"
import SearchBar from "./components/SearchBar"
import { baseColaboradores } from "./db"

function App() {
  
  const [listaColaboradores, setListaColaboradores] = useState(baseColaboradores)
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [search, setSearch] = useState('')
  
  return (
    <div className="App container">
      <SearchBar setSearch={setSearch} />
      <Form 
      input1={input1}
      setInput1={setInput1}
      input2={input2}
      setInput2={setInput2}
      setListaColaboradores={setListaColaboradores}
      listaColaboradores={listaColaboradores}
      
      
      />
      <List listaColaboradores={listaColaboradores} search={search}/>

    </div>
  )
}

export default App
