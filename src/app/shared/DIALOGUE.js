
export const DIALOGUE = [
    {
        id: 0,
        choiceName: 'Start Game',
        dialogue: `The very uncomfortable feeling of someone watching you suddendly wakes you up. You RETURN 
        open one eye to look around but see no one. The second you open both eyes you begin RETURN to questioning your current location. Why are my walls damaged? You say confused`
                   //stand up
                   //+ with ``
    },
    {
        id: 1,
        choiceName: 'Stand Up',
        dialogue: `As you get up, you realize that the bed you're in is covered in dust. You take a closer 
                   look and realize that you don't recognize this room. 

                    You've never been here before... 
                    
                    You spot a red ray of light shining through a tiny window. You come to the conclusion that
                    this room hasn't been inhabited in a very long time based off of the way nature has 
                    started to reclaim it. To the left of the wall with the window you see very well worn
                    door.
                    
                    What do you do first?`
                    //Look out the window
                    //Check the door
    },
    {
        id: 2,
        choiceName: 'Look out the window',
        dialogue: `You hear the crunching of debris under your feet as you walk up to the window. You pull
                   the blinds apart and see that it's actually not sunlight coming through the window. In 
                   fact, everything outside just looks wrong. The bright red light was coming from behind
                   the trees. You tried looking up to see if the light was coming from above but you 
                   weren't able to see past the crowns of the trees. 
                   "Where am I?" you think to youself.
                   Out of no where, the red light begins to fade and quickly dissapears. 
                    
                   It's pitch dark outside now...
                   
                   There is only one option left. Go ahead and check the door. `
                   //Go check the door
    },
    {
        id: 3,
        choiceName: 'You check the door',
        dialogue: `The door's paint is heavily chipped and you can tell it's been abused. It's also
                   missing a doorknob. Luckily the rest of the doorknob mechanism was also missing so a
                   simple pull would open it. Pulling the door open reveals a hallway. You peek out into the 
                   hallway. 
                   
                   Left or right?`
                //Peek left
                //Peek right
    },
    {
        id: 4,
        choiceName: 'Peek right',
        dialogue: `You turn right and see a wall. There are several picture frames hanging but none of 
                   them have pictures in them. The more you study the picture frames, the more they make 
                   you feel uncomfortable. 
                   
                   Oh no... that same feeling that woke you up is back and it feels more intense. 
                   
                   You know what you must do... `
                   //Peek Left
    },
    {
        id: 5,
        choiceName: 'Peek Left',
        dialogue: `Feeling uneasy, you slowly turn left. You freeze when you see a tall person at 
                   the end of the hallway. You can't distinguish any features because all you see is the 
                   silhouette of a person. You notice one very unique detail. He's wearing an old stiyle 
                   hat. Despite not being able to see his face, you know this person is looking right 
                   at you.
                   
                   Your vision begins to darken and you feel a bit dizzy...
                   
                   Hurry! Get back in the room!`
                   //GO!
    },
    {
        id: 6,
        choiceName: 'You pull back',
        dialogue: `You pull your head back right before you lose your sight completely. 
                   "What's going on!?" you think to yourself while trying to control your body from trembling. 
                   You try to remember how you got here but it feels like you can't access that part of your 
                   memory. You have no idea where you are or how you got here but you know one thing for 
                   sure... you need to find a way out of here and there is only one way to get out. 
                   
                   This is the only way forward.`
                   //Go out the door
    },
    {
        id: 7,
        choiceName: 'Go out the door',
        dialogue: `You go back to the door and check if the silhouette is still there. 
        
                   Nothing. 
                   
                   You slowly walk down the hallway and see that it splits into two pathways.
                   
                   The left has a door with strange letters that you can't read. It's not that you don't 
                   understand the language. You know those are english words but something isn't letting 
                   you piece them together. 
                   
                   The right has as door with two metal latches in addition to the deadbolt. That's strange... 
                   why would there be that many latches on the door? The only reason you notice a crack on 
                   the door is because you see that same red light shine through. The light dissapears afer
                   a few seconds. You've seen this happen before...
                   
                   
                   Your heart starts punding faster and faster as that feeling of being watched returns. 
                   You need to make a decision, quick!
                   
                   Be confident in your decision. You won't be able to turn back...`
                   //go to left door
                   //go to right door ID:12
    },
    {
        id: 8,
        choiceName: 'Go to left door',
        dialogue: `You quickly run to the door on the left and struggle with the doorknob. The knob is 
                   seized and it's going to take some force to open it. 
                   You know you're runnig out of time so you violently shake the doorknob and slam into the 
                   door with all your strength.
                   
                   "Crack"
                   
                   The knob turns and you force your way in closing and locking the door behind you.
                   
                   *bzz bzz* You hear a phone vibrate. You recognize that it's a phone and it bring a small
                   sense of relief. The phone is on a dest still vibrating. In a panic, you run up to the 
                   phone and try to navigate it to call someone. The screen is extremely blurry and you 
                   can't read anything on it. Suddendly, you feel the phone vibrate in your hand again and 
                   next thing you know, it's out of your hand and back on the desk. No idea how that happen 
                   you contemplate your next move. You're running out of options...
                   
                   You hear the doorknob shake... `
                   //hide under desk
                   //try the phone again
    },
    {
        id: 9,
        choiceName: 'Hide under',
        dialogue: `Knowing this is a very risky decision, you quickly hide under the desk hoping that the 
                   silhouette doesn't see you. 
                   
                   The doorknob finally gives and the door slowly creaks open. The door opens only slightly
                   before it stops moving. You shut your eyes hoping that it will help in further concealing 
                   you. The vibrating phone suddendly stops buzzing and you open your eyes to see what's 
                   going on. 
                   
                   The room starts getting darker and darker. Your vision starts vibrating and you try to 
                   scream but nothing comes out. No matter how loud you scream... complete silence consumes
                   the room. 
                    
                   Your vision is gone and you ball up on the ground.
                   
                   He's got you...`
                   //DEAD
                   //go back to "Go to left door" ID: 9
    },
    {
        id: 10,
        choiceName: 'Try the phone again',
        dialogue: `You grab the phone again and still... no matter how hard you try to look at the phone,
                   the screen continues to be blurry. The phone then vibrates again and vanishes from your 
                   hand. It's back on the desk again. You know there's nothing else you can do other than
                   let what's going to happen happen. The mental state you're in forced you to grab the 
                   phone in rage and launch it at the wall. 
                   
                   The phone implodes and consumes the wall leaving a huge gaping hole.
                   
                   This is your last option...`
                   //Jump through wall
                   //Go to wake up ID: 15
    },
    {
        id: 11,
        choiceName: 'Go to right door',
        dialogue: `You undo the two latches on the door and push the door open. The door leads outside.
                   You shut the door behind you and look into the darkness. You can barely see three feet
                   infront of you. 
                   
                   Out of no where, the bright red light returns but this time something is different. You
                   look at your arms and see little holes forming all over your skin. Little worms start
                   crawling out of some of the holes. 
                   
                   "The light is causing this" you think to yourself.
                   
                   You look up and see a public bathroom facility. You can run in the facility and try to 
                   hide or you can run in to the woods and see where that path leads you.
                   
                   Do you run or hide?`
                   //Run into the woods
                   //Run to the facility and hide
    },
    {
        id: 12,
        choiceName: 'Run into the woods',
        dialogue: `You run towards the woods trying to avoid the light. You know the light will fade away
                   soon but you're not sure how long it will last. All you know is that you need to make 
                   your way towards the trees to lose the silhouette. 
                   
                   Holes have started to form on your neck and legs and you feel the worms slowly trickle 
                   down your hody as they continue to slither out of the holes. 
                   
                   You make it to the trees but the light hasn't faded. You still can't find where the 
                   light is coming from. You aren't able to find cover and your legs give out. Not because
                   you've tired them out but becuase the amount of holes has rendered them useless. You fall 
                   over with your arms out forward but they fail to catch for the same problem has happened
                   to them as with your legs. 
                   
                   Nothing you do can help you anymore...`
                   //DEAD
                   //Go back to "Go to right door" ID: 12
    },
    {
        id: 13,
        choiceName: 'Run to the facility and hide',
        dialogue: `The facility has no doors but you have no time. You run inside and look at your arms.
                   The holes are closing up. As you look down at your arms you notice that the floor is
                   covered in a black liquid. As you observe it you briefly see your reflection move but 
                   you didn't pay too much attention. The ripples in the liquid were preventing a clear 
                   image. 
                   
                   Trying to avoid slipping, you walk up to the end of the facility and go to hide in the 
                   last bathroom stall. It wont budge... You can't fit under the stall door and you're 
                   not able to fit over it so climbing is not a viable option. You push and pull but 
                   nothing. Then suddendly... you feel the door vibrating 
                   
                   The door explodes open and twists you from the waist 180 degrees. In excruciating pain
                   you tilt forwar ointo the sink and look in the mirror. You see your reflection as you 
                   scream in pain. The reflection of your face doesn't have eyes or a mouth but you know
                   that's you screaming... As you continue to look at your reflection you see it reach
                   out of the mirror and it grabs your face. This send you into a blinding white hot pain.
                   
                   You lose consciousness....
                   
                   Let go...`
                   //Go to wake up
    },
    {
        id: 14,
        choiceName: 'Wake up',
        dialogue: `You wake up paralized. Your eyes are the only thing you have control of. You look around
                   and recognize everyting around you.
                   
                   You're back in your room.
                   
                   You catch a small movement in the corner of your eye. Quickly looking over you notice 
                   that same silhouette on the ceiling. No matter how hard you try, you just can't regain
                   control of your body. 
                   
                   Knowing that this could be the end of your life. You shut your eyes and embrace what's to 
                   come but nothing happens. After opening your eyes you see that the silhouette has
                   disappeared.
                   
                   Finally, you're able to move your body. You rapidly sit up on your bed and look around 
                   to make sure the silhouette isn't in the room. It's gone. 
                   You sigh in relief.
                   
                   As you walk out of your room you notice a hat on the floor in the hallway...`
                   //GG
    },
    {
        id: 15,
        choiceName: 'You pick up the hat',
        dialogue: `You pick up the hat and look inside.
                   There is a note inside BBYTX-805762770836`
    }
];