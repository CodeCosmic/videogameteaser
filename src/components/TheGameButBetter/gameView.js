import { DIALOGUE } from "../../app/shared/DIALOGUE"

const DialogueView = ({currentRoom}) => {
    return (
        <>
            <p>{DIALOGUE[currentRoom].choiceName}</p>
            <p>{DIALOGUE[currentRoom].dialogue}</p>
        </>
    )
}

export default DialogueView;
