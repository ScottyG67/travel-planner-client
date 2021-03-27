const Login = () => {

    return (
        <div className="col-md-6">
            <h1>Welcome Back!</h1>
            <form>
                <div className="mb-3">
                    <label for="username" className="form-label">
                        Username
                        <input type="text" className="form-control" name="username"/>
                    </label>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">
                        Password
                        <input type="email" className="form-control" name="password"/>
                    </label>
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-primary" value="Login"/>
                </div>
            </form>
        </div>
    )

}

export default Login