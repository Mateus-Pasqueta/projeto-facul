import { useRef, useState } from "react";
import "./Admin.css";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const Admin = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const { login:authenticatedUser } = useAuth();
    
    const submit = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const data = { username, password };

        login(data)
        .then(response => {

            if(response){
                authenticatedUser(response);
                navigate("/admin/control");
            }else {
                setIsError(true);
            }

        }).catch(e => {

            setIsError(true);
            
        })

        
    };

    return  (
                <div className="form container p-5 my-5 w-50">
                    {isError && <h2>Usuário ou senha inválidos</h2>}
                    <form class="form-cadastro" method="POST" onSubmit={submit}>
                        <div class="mb-3">
                            <label for="email" class="form-label">Usuário</label>
                            <input type="text" class="form-control" aria-describedby="emailHelp"
                                name="email" ref={usernameRef}></input>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">senha</label>
                            <input type="password" class="form-control" name="password" ref={passwordRef}></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>
                </div>
    )
}

export default Admin;