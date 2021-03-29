const SignUp = ({ handleSignUp }) => {

    return (
        <div className="col-md-6">
            <h1>Create Account</h1>
            <form onSubmit={(e) => {handleSignUp(e)}}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="signup-first-name" name="first_name" placeholder="First Name"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="signup-last-name" name="last_name" placeholder="Last Name"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="signup-username" name="username" placeholder="Username"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="signup-password" name="password" placeholder="Password"/>
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                </div>
            </form>
        </div>
    )

}

export default SignUp