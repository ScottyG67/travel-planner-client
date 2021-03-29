const Main = ({ currentUser }) => {

    return (
        <div>
            {`${currentUser.first_name} ${currentUser.last_name} -- ${currentUser.id} ${currentUser.username}`}
        </div>
    )

}

export default Main