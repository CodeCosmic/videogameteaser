import { useState } from "react";
import { Button, Card } from "reactstrap";
import { DIALOGUE } from "../../app/shared/DIALOGUE";
import DialogueView from "./gameView"

const TheGameButBetter = () => {
    const [currentRoom, setCurrentRoom] = useState(0)

    return(
        <>
            <div >
                <Card style={{background: 'white'}}>
                    <DialogueView currentRoom={currentRoom}/>
                    {DIALOGUE[currentRoom].options.map((option) => {
                        return(
                        <Button
                            key={option}
                            onClick={() => {
                                setCurrentRoom(DIALOGUE.find((next)=>next.choiceName === option).id)
                            }}
                        >
                            {option}
                        </Button>
                        )
                    })}
                </Card>
            </div>
        </>
    )
}


export default TheGameButBetter;
