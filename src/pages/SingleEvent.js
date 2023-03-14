import { useParams } from "react-router-dom"

const SingleEvent = () => {

    const {dummyevent} = useParams()

    return (
        <div className="py-5">
            SingleEvent
            {dummyevent}
        </div>
    )
}

export default SingleEvent