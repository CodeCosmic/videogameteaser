import { useState } from "react";
import { Button, Card } from "reactstrap";
import { DIALOGUE } from "../../app/shared/DIALOGUE";
import './theGameButBetter.css'

const TheGameButBetter = () => {
    const [currentRoom, setCurrentRoom] = useState(0)

    return(
        <>
            <div className="cardContainer">
                <Card className="cardStyle">
                    <p>{DIALOGUE[currentRoom].choiceName}</p>
                    <p className="paragraph">{DIALOGUE[currentRoom].dialogue}</p>
                    {DIALOGUE[currentRoom].options.map((option) => {
                        return(
                        <Button
                            className="buttons"
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
