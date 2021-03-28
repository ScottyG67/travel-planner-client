const Main = ({ currentUser }) => {

    return (
        <div>
            {`${currentUser.first_name} ${currentUser.last_name} -- ${currentUser.username}`}
        </div>
    )

}

export default Main