const SignUp = ({ handleSignUp }) => {

    return (
        <div className="col-md-6">
            <h1>SignUp Now</h1>
            <form onSubmit={(e) => {handleSignUp(e)}}>
                <div className="mb-3">
                    <label className="form-label">
                        First Name
                        <input type="text" className="form-control" id="signup-first-name" name="first_name"/>
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Last Name
                        <input type="text" className="form-control" id="signup-last-name" name="last_name"/>
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Username
                        <input type="text" className="form-control" id="signup-username" name="username"/>
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Password
                        <input type="password" className="form-control" id="signup-password" name="password"/>
                    </label>
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                </div>
            </form>
        </div>
    )

}

export default SignUp