# Prompt History

- **2026-08-10**: you're gonna work as an orchestrator working with the ide , reviewing code and i want you create a skill folder, put prompt history.md inside it store all the prompts inside it that i'll be giving you. You'are gonna brainstorm with me for the project , create a phase.md file inside the history folder in which you'll be storing all the things we did in the previous steps. For the steps to be done by the ide you'll create steps.md file.

- **2026-08-10**: put the steps.md file into the main os folder where the backend and frontend will reside

- **2026-08-10**: I am building a local, distraction-free interview simulator.It's a random topic roulette for my operating systems preparation check.
Data Fetching: On load, i'll click the spin button , it's gonna rotate and fetch rendom question.
State Management: When a question is selected , display it in a large, highly readable font in the center of the screen.
The Timer: The exact moment a question is displayed, a visible stopwatch timer (format MM:SS) must start ticking up from 00:00.And the timer's end time we'll be brainstorming according to the difficulty.
The Loop: Include a prominent "Next Question" button. Clicking it must immediately reset the timer to 00:00 and the wheel will spin and a new question will get displayed from the currently selected topic.
Design & Aesthetic (Cyberpunk / Terminal):
Theme: Dark mode. The background should be a rich midnight blue/dark grey (e.g., #0D1117).
Accents: The primary active color should be an electric cyan or vibrant azure (e.g., #00E5FF). Muted/inactive text should be a slate grey.
Typography: Strictly use a monospaced font like Fira Code, JetBrains Mono, or VT323 to give it a developer terminal feel.
Layout: Single screen, no scrollbars.
Top: A dropdown menu to select the category from data.json, styled subtly like a terminal directory path (e.g., ~/topics/category-name).
Center: The main roulette display area.
Bottom: A highly visible [ SPIN ] button and a digital timer.

- **2026-08-10**: wait we've more things to decide. What database to be used to store the questions? i've this os_interview_questions.md as well as pdf. we need to parse this .md and organise the difficulty and store it into data base. lets first decide how are we gonna parse this and turn it into feasible form to be extracted.

- **2026-08-10**: i think the express backend would be better because if i want to add more core cs subjects it would be better than the simple .json. what do you think?

- **2026-08-10**: tell me how you want me to setup the database? we're gonna use locally on my laptop or online?

- **2026-08-10**: okay sounds good , any questions you wanna know? take my conformation for every thing tell me the flow how are we gonna execute our plan from the beginning to the end.

- **2026-08-10**: 1) d:/MIGHT_BE_DEV_JOURNEY/Express_backend/core_cs/os/ , yes it is here. 
2) yes this structure works for me
3) it should keep counting up while flashing RED so you know how much overtime i'm taking.
these are the answers to your questions. But i want more features for my concrete preparations. give me more ideas

- **2026-08-10**: actually i want all of it

- **2026-08-10**: give me the prompt to be given to it.

- **2026-08-10**: actually after each phase i want you to review the code

- **2026-08-10**: it's done with phase 3.1

- **2026-08-10**: done next phase

- **2026-08-10**: it's done with it's work

- **2026-08-10**: check with the front end please

- **2026-08-10**: review it

- **2026-08-10**: see i've few changes to be done. 
1. increase the blur mode timing to around 10sec
2. put reset button for timer reset
3. there is a type your answer form field which was never in the plan.
4. timer should start after count down of 20 sec. make whole screen blur except the question for 20 sec and after that 20 sec unblur everything and start 10 sec timer for the question blur should start and the timer for the question.
5.put bad , okay and nailed it button below separately and spin roulette button separately and timer over the top centered with big and bold , below it the question should display and below it other buttons stacked vertically downwards

- **2026-08-10**: sounds good.

- **2026-08-10**: till it's finishing the work lets discuss about more improvement, are u aware of like wheel rotating?

- **2026-08-10**: i dont like the radar one, basically i want it to rotate from bottom to top for like somthing
q1
^
 |
q2
^
 |
q3

something like this like each time it rotated new questions appears from the bottom and the top one dissapears and like there is 3d effect front one is clear the back 2 ones are little bit smaller and behind

- **2026-08-10**: okay the ide is finished with the 6th phase , i'll answer you question after this , please check for the changes

- **2026-08-10**: lemme check the phase 6 first , if there are any changes i want we can change it rn only

- **2026-08-10**: okay so as soon as we shoot the server the question is being displayed and the 20 sec timer start we talked about. i want to basically spin button then the spinning effect and then the question.

- **2026-08-10**: make rotating effect to 5 sec

- **2026-08-10**: review

- **2026-08-10**: we're done with the first subject. now i want you to create enterance front end where i'll be able to select the subject , and then this interface that we create will appear. we need CN , OS , DBMS , OOPS , DSA for now.

- **2026-08-10**: i want backend to lie on all the different folders , like i've created for the os , now i want it to be distributed in different folders , or we should do it in this same one only?

- **2026-08-10**: 1) okay monolithic is fine
2) lobby is better , that way it'll be more organized

- **2026-08-10**: have you told it to read the cn_interview_question.md , dbms_interview_question.md , oops_interview_question.md , for dsa put under construction for now because i dont have it rn, or we'll do it in later steps?

- **2026-08-11**: review it

- **2026-08-11**: since inside the parser.js the difficulty is also being decided , lets first brainstorm about the setting the difficulty levels and the frequency appearance of questions. suggest me some ideas and i'll reflect on it

- **2026-08-11**: dont you think that it's better to adjust our frequency of appearance as frequently appearing in the interviews?

- **2026-08-11**: Highly Asked + You suck at it = Maximum Priority (Spins often)
Rarely Asked + You suck at it = Medium Priority (Spins sometimes)
Highly Asked + You nailed it = Low Priority (Spins rarely)

build all the combinations which we're planning

- **2026-08-11**: how are you planning to give the interview frequency weights?

- **2026-08-11**: it looks good to me. does the .md files include the frequency ones or you'll be needing to go thru the internet and then edit the .md file such that it categorizes?

- **2026-08-11**: review please

- **2026-08-11**: there is a problem in the front end when rotating for the respected section for example CN section the roulette still shows the os questions while rotating , i want it to pe subject specific , while cn should be showing the cn questions while rotating , while os should be showing the os ones and similarly for the oops and the dbms

- **2026-08-16**: https://miro.com/app/board/uXjVHS2loQU=/
do you have access to this?

- **2026-08-16**: now?
