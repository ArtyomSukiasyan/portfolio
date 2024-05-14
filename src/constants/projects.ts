import arbiterImg from "../../public/images/arbiter.webp";
import chessNewsImg from "../../public/images/chessNews.webp";
import chessImg from "../../public/images/chess.webp";
import chessEngineImg from "../../public/images/Chess-Engine.webp";
import chessClockImg from "../../public/images/Chess-clock.webp";
import rockPaperScissorsImg from "../../public/images/rock-paper-scissors.webp";
import ticTacToeImg from "../../public/images/TicTacToe.webp";
import ticTacToeEngineImg from "../../public/images/tic-tac-toe-engine.webp";
import game2048Img from "../../public/images/2048.webp";
import bmwShowroomImg from "../../public/images/bmw-showroom.webp";
import flipCardsImg from "../../public/images/Flip-cards.webp";
import wallClockImg from "../../public/images/Wall-clock.webp";
import passwordGeneratorImg from "../../public/images/password-generator.webp";
import mineSweeperImg from "../../public/images/MineSweeper.webp";

export const PROJECTS = [
  {
    title: "Chess Arbiter",
    text: "A handbook of chess rules. It can be useful for chess arbiters and chess players, who have to know the rules to protect their rights. There is also a mobile app for Android.",
    image: arbiterImg,
    roles: ["Co-founder", "NextJs", "React Native", "Firebase"],
    href: "https://chessarbiter.info/",
    otherHref:
      "https://play.google.com/store/apps/details?id=com.chessarbiter&pli=1",
    otherHrefText: "Mobile app",
  },
  {
    title: "Chess news in Armenia",
    text: "Chess news in Armenia and the world. Educational and entertainment materials. The website of the Ararat Region Chess Federation is located on the subdomain",
    image: chessNewsImg,
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
    image: chessImg,
    roles: ["React", "CSS"],
    href: "https://react-ts-chess-henna.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/react-ts-chess",
  },
  {
    title: "Chess Engine",
    text: "Simple chess game with my bot",
    image: chessEngineImg,
    roles: ["React", "CSS"],
    href: "https://chess-engine-green.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Chess-engine",
  },
  {
    title: "Chess Clock",
    text: "Simple chess clock with choice of time and increment",
    image: chessClockImg,
    roles: ["React", "CSS"],
    href: "https://chess-clock-amber.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Chess-clock",
  },
  {
    title: "Rock-Paper-Scissors Engine",
    text: "Simple Rock-Paper-Scissors game with my bot",
    image: rockPaperScissorsImg,
    roles: ["React", "CSS"],
    href: "https://rock-paper-scissors-eight-rose.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/rock-paper-scissors",
  },
  {
    title: "TicTacToe",
    text: "TicTacToe game written in React",
    image: ticTacToeImg,
    roles: ["React", "CSS"],
    href: "https://tic-tac-toe-wheat-gamma.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/TicTacToe",
  },
  {
    title: "TicTacToe Engine",
    text: "TicTacToe game with choice of side and difficulty",
    image: ticTacToeEngineImg,
    roles: ["React", "CSS"],
    href: "https://tic-tac-toe-engine.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/TicTacToe-Engine",
  },
  {
    title: "2048",
    text: "The well-known game 2048",
    image: game2048Img,
    roles: ["React", "CSS"],
    href: "https://2048-peach.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/2048",
  },
  {
    title: "Minesweeper",
    text: "Minesweeper according to all the rules",
    image: mineSweeperImg,
    roles: ["HTML", "CSS"],
    href: "https://minesweeper-rouge-six.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/minesweeper",
  },
  {
    title: "BMW Showroom",
    text: "Tiny site on pure HTML and CSS with small animations. Hover over the logo",
    image: bmwShowroomImg,
    roles: ["HTML", "CSS"],
    href: "https://bmw-show-room.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/BMW-showRoom",
  },
  {
    title: "Flip Cards",
    text: "Extraordinary flip card for a short biography",
    image: flipCardsImg,
    roles: ["HTML", "CSS"],
    href: "https://flip-cards-five.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/flip-cards",
  },
  {
    title: "Wall Clock",
    text: "Wall clock that works like a real one",
    image: wallClockImg,
    roles: ["HTML", "CSS", "JS"],
    href: "https://clock-gray.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Clock",
  },
  {
    title: "Password generator",
    text: "Password generator on pure JavaScript with a choice of length and components",
    image: passwordGeneratorImg,
    roles: ["HTML", "CSS", "JS"],
    href: "https://password-generator-chi-two.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Password-Generator",
  },
];
