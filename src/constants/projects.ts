import arbiterPhoto from "../../public/images/arbiter.webp";
import chessNewsPhoto from "../../public/images/chessNews.webp";
import chessPhoto from "../../public/images/chess.webp";
import chessEnginePhoto from "../../public/images/Chess-Engine.webp";
import chessClockPhoto from "../../public/images/Chess-clock.webp";
import rockPaperScissorsPhoto from "../../public/images/rock-paper-scissors.webp";
import ticTacToePhoto from "../../public/images/TicTacToe.webp";
import ticTacToeEnginePhoto from "../../public/images/tic-tac-toe-engine.webp";
import game2048Photo from "../../public/images/2048.webp";
import bmwShowroomPhoto from "../../public/images/bmw-showroom.webp";
import flipCardsPhoto from "../../public/images/Flip-cards.webp";
import wallClockPhoto from "../../public/images/Wall-clock.webp";
import passwordGeneratorPhoto from "../../public/images/password-generator.webp";
import mineSweeperPhoto from "../../public/images/MineSweeper.webp";

export const PROJECTS = [
  {
    title: "Chess Arbiter",
    text: "A handbook of chess rules. It can be useful for chess arbiters and chess players, who have to know the rules to protect their rights. There is also a mobile app for Android.",
    image: arbiterPhoto,
    roles: ["Co-founder", "NextJs", "React Native", "Firebase"],
    href: "https://chessarbiter.info/",
    otherHref:
      "https://play.google.com/store/apps/details?id=com.chessarbiter&pli=1",
    otherHrefText: "Mobile app",
  },
  {
    title: "Chess news in Armenia",
    text: "Chess news in Armenia and the world. Educational and entertainment materials. The website of the Ararat Region Chess Federation is located on the subdomain",
    image: chessNewsPhoto,
    roles: ["founder", "Wordpress", "JS"],
    href: "https://chessnews.am/",
    otherHref: "https://ararat.chessnews.am/",
    otherHrefText: "Visit subdomain",
  },
];

export const FUN_PROJECTS = [
  {
    title: "Chess",
    text: "Chess game according to all the rules",
    image: chessPhoto,
    roles: ["React", "CSS"],
    href: "https://react-ts-chess-henna.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/react-ts-chess",
  },
  {
    title: "Chess Engine",
    text: "Simple chess game with my bot",
    image: chessEnginePhoto,
    roles: ["React", "CSS"],
    href: "https://chess-engine-green.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Chess-engine",
  },
  {
    title: "Chess Clock",
    text: "Simple chess clock with choice of time and increment",
    image: chessClockPhoto,
    roles: ["React", "CSS"],
    href: "https://chess-clock-amber.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Chess-clock",
  },
  {
    title: "Rock-Paper-Scissors Engine",
    text: "Simple Rock-Paper-Scissors game with my bot",
    image: rockPaperScissorsPhoto,
    roles: ["React", "CSS"],
    href: "https://rock-paper-scissors-eight-rose.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/rock-paper-scissors",
  },
  {
    title: "TicTacToe",
    text: "TicTacToe game written in React",
    image: ticTacToePhoto,
    roles: ["React", "CSS"],
    href: "https://tic-tac-toe-wheat-gamma.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/TicTacToe",
  },
  {
    title: "TicTacToe Engine",
    text: "TicTacToe game with choice of side and difficulty",
    image: ticTacToeEnginePhoto,
    roles: ["React", "CSS"],
    href: "https://tic-tac-toe-engine.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/TicTacToe-Engine",
  },
  {
    title: "2048",
    text: "The well-known game 2048",
    image: game2048Photo,
    roles: ["React", "CSS"],
    href: "https://2048-peach.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/2048",
  },
  {
    title: "Minesweeper",
    text: "Minesweeper according to all the rules",
    image: mineSweeperPhoto,
    roles: ["HTML", "CSS"],
    href: "https://minesweeper-rouge-six.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/minesweeper",
  },
  {
    title: "BMW Showroom",
    text: "Tiny site on pure HTML and CSS with small animations. Hover over the logo",
    image: bmwShowroomPhoto,
    roles: ["HTML", "CSS"],
    href: "https://bmw-show-room.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/BMW-showRoom",
  },
  {
    title: "Flip Cards",
    text: "Extraordinary flip card for a short biography",
    image: flipCardsPhoto,
    roles: ["HTML", "CSS"],
    href: "https://flip-cards-five.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/flip-cards",
  },
  {
    title: "Wall Clock",
    text: "Wall clock that works like a real one",
    image: wallClockPhoto,
    roles: ["HTML", "CSS", "JS"],
    href: "https://clock-gray.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Clock",
  },
  {
    title: "Password generator",
    text: "Password generator on pure JavaScript with a choice of length and components",
    image: passwordGeneratorPhoto,
    roles: ["HTML", "CSS", "JS"],
    href: "https://password-generator-chi-two.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Password-Generator",
  },
];
