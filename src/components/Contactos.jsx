import React from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Contactos = ({ contacto }) => {
    return (

        <div>

            <Card>
                <Card.Body>
                    <ListGroup>
                        <ListGroupItem>Nome: {contacto.nome}</ListGroupItem>
                        <ListGroupItem>Telefone: {contacto.telefone}</ListGroupItem>
                        <ListGroupItem>Email: {contacto.email}</ListGroupItem>
                    </ListGroup>
                    <button className="btn btn me-2">Apagar</button>
                    <button className="btn btn me-2">Editar</button>
                </Card.Body>

            </Card>



        </div>
    )
}

export default Contactos