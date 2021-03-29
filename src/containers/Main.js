import Trips from './Trips'
const Main = ({ currentUser }) => {

    return (
        <div>
            {`${currentUser.first_name} ${currentUser.last_name} -- ${currentUser.id} ${currentUser.username}`}
            <Trips />
        </div>
    )

}

export default Main