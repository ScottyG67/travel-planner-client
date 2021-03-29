const Login = ({ handleLogin }) => {

    return (
        <div className="col-md-6">
            <h1>Login</h1>
            <form onSubmit={(e) => handleLogin(e)}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="username" placeholder="Username"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-primary" value="Login"/>
                </div>
            </form>
        </div>
    )

}

export default Login