import "./Admin.css";

const Admin = () => {
    return  (
                <div className="form container p-5 my-5 w-50">
                    <form class="form-cadastro" action="/login/register" method="POST">
                        <div class="mb-3">
                            <label for="email" class="form-label">Endereço de email</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp"
                                name="email"></input>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">senha</label>
                            <input type="password" class="form-control" name="password"></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Cadastrar-se</button>
                    </form>
                </div>
    )
}

export default Admin;