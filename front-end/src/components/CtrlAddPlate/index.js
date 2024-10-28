import "./CtrlAddPlate.css";
import CtrlNav from "../../components/CtrlNav";
import { useEffect, useState } from "react";
import { addPlate, updatePlate } from "../../services/api";
import { Button, Modal } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useContext } from "react"; 
import AppContext from "../../context/AppContext";


const CtrlAddPlate = () => {
  const { id } = useParams(); 
  const [ plate, setPlate ] = useState();
  const { plateList } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    if(id && plateList && plateList.length > 0){
      const existPlate = plateList.find(plate => Number(plate.id) === Number(id));
      if(existPlate){
        setPlate(existPlate);
      }
    }
  }, [id, plateList]);
  
  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlate((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    if(id){
      const data = { ...plate };
      updatePlate(data).then(response => {
        if(response.status === 201 || response.status === 200) {
          setShowModal(true);
        }
      })
      return
    };

    addPlate(plate).then((response) => {
      if (response.status === 201) {
        setShowModal(true);
      }
    });
    return
  };

  

  return (
    <>
      <CtrlNav />

      <div className="form container p-5 my-5 w-50">
        <form class="form-cadastro" action="" method="POST" onSubmit={submit}>
          <div class="mb-3">
            <label for="nome" class="form-label">
              nome
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              name="nome"
              value={plate?.nome}
              onChange={handleChange}
            ></input>
          </div>
          <div class="mb-3">
            <label for="preco" class="form-label">
              preco
            </label>
            <input
              type="text"
              class="form-control"
              name="preco"
              value={plate?.preco}
              onChange={handleChange}
            ></input>
          </div>
          <div class="mb-3">
            <label for="img" class="form-label">
              imagem
            </label>
            <input
              type="text"
              class="form-control"
              name="img"
              value={plate?.img}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" class="btn btn-primary">
            {plate?.id !== undefined ? "Editar" : "Criar"}
          </button>
        </form>
      </div>

      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>Seu cardápio foi atualizado.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CtrlAddPlate;
