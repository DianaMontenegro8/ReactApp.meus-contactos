import React, { useEffect, useState } from "react";
import axios from "axios"
import Contactos from "./Contactos";
import { Container } from "react-bootstrap"


const Lista = () => {


    const URL = "http://localhost:3005/contactos"

    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const [list, setList] = useState([])

    useEffect(() => {

        getData().then((response) => {
            setList(response.data);
        })
    }, [])

    return (
        <Container>
            {
                list.map((contacto , index) => (
                <Contactos
                    key={index}
                contacto={contacto}
                />
                
                ))
            }
        </Container>
    )

}

export default Lista