const List = ({ listaColaboradores, search }) => {



    return (

        <div className="p-4 ">

            <ul className="list-group">
                <li className="list-group-item d-flex  align-items-center">
                    <p className="me-4 my-0 p-list tr" >Nombre del colaborador</p>
                    <p className="me-4 my-0 p-list tr" >Correo electrónico</p>
                </li>

                {listaColaboradores
                    .filter((colaborador) => colaborador.nombre.includes(search))
                    .map((colaborador) => {

                        return (
                            <li className="list-group-item d-flex  align-items-center" key={colaborador.id}>
                                <p className="me-4 my-0 p-list" >{colaborador.nombre}</p>
                                <p className="me-4 my-0 p-list" >{colaborador.correo}</p>
                            </li>
                        )
                    })
                }

            </ul>




        </div>
    )
}



export default List