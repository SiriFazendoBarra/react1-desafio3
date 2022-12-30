import React from "react"


const Form = ({ input1, setInput1, input2, setInput2, setListaColaboradores, listaColaboradores }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input1 == '' || input2 == '') {
            return
        }

        setListaColaboradores([...listaColaboradores,
        {
            id: Date.now(),
            nombre: input1,
            correo: input2,
        },

        ])

        e.target.reset()
        setInput1('')
        setInput2('')
    }

    return (
        <>
            <form className="d-flex flex-column p-4 pb-0" action="" onSubmit={e => handleSubmit(e)}>
                <div className="input-group">
                    <label className="input-group-text labelForm" htmlFor="ingrese nombre colaborador">Nombre del colaborador</label>
                    <input className="form-control" name=" ingrese nombre colaborador" type="text" placeholder="Ingrese el nombre del colaborador" onChange={e => setInput1(e.target.value)} />
                </div>
                <div className="input-group" >
                    <label className="input-group-text labelForm" htmlFor="ingrese correo del colaborador">Correo del colaborador</label>
                <input className="form-control" name="ingrese correo del colaborador" type="email" placeholder="Ingrese correo del colaborador" onChange={e => setInput2(e.target.value)} />
                </div>
                
                <button className="btn btn-dark my-3 btnForm" type="submit" >Agregar colaborador</button>
                <hr />
            </form>

        </>
    )
}

export default Form