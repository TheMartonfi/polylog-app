# Polylog App

Polylog app aims to create a better remote lecturing experience for both lecturers and students. The app provides real time video communication using Jitsi Meet and provides a built in activity feed to increase engagement and comprehension by allowing lecturers to build topic and quiz cards. The topic cards allow students to ask questions anonymously and give positive or negative reactions to a topic to let the lecturer know how well they are grasping the content being presented. The quiz cards allow both the lecturer and student gage how well students are grasping new concepts.

## Getting Started

1. You will need the Polylog API you can find the repo with instructions [here](https://github.com/TheMartonfi/polylog-api).
2. Install dependencies using the `npm install` command.
3. Copy and fill out .env.example as .env (API = http://localhost:3001/api WEBSOCKET = ws://localhost:3002)
4. Start the web server using the `npm start` command. The app will be served at <http://localhost:3000/>.
5. Go to <http://localhost:3000/lectures> in your browser.

## Dependencies

- Node
- React
- Jitsi Meet

## Screenshots

!['Lectures'](https://github.com/TheMartonfi/polylog-app/blob/main/docs/lectures.png?raw=true)
!['Lecture Edit'](https://github.com/TheMartonfi/polylog-app/blob/main/docs/lecture-edit.png?raw=true)
!['Lecture Reporting'](https://github.com/TheMartonfi/polylog-app/blob/main/docs/lecture-reporting.png?raw=true)
!['Session'](https://github.com/TheMartonfi/polylog-app/blob/main/docs/session.png?raw=true)
