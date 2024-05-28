import arbiterImg from "../../../public/images/arbiter.webp";
import arbiterMobileImg from "../../../public/images/arbiterMobile.webp";
import araratRegionImg from "../../../public/images/araratRegion.webp";
import chessImg from "../../../public/images/chess.webp";
import chessEngineImg from "../../../public/images/Chess-Engine.webp";
import ticTacToeEngineImg from "../../../public/images/tic-tac-toe-engine.webp";
import game2048Img from "../../../public/images/2048.webp";
import mineSweeperImg from "../../../public/images/MineSweeper.webp";
import sdcImg from "../../../public/images/sdc.webp";
import { IProject } from "../../models/project";

export const JOB_PROJECTS: IProject[] = [
  {
    title: "The SDC website with admin panel",
    text: "The website of The Software Development Company with admin panel. Maintained it for a long time and added new features",
    image: sdcImg,
    roles: ["NextJs", "React", "Koa", "Mongo", "Docker"],
    href: "https://sdc.am",
  },
];

export const OPEN_SOURCE_PROJECTS: IProject[] = [
  {
    title: "Chess Arbiter",
    text: "A multi language open source website. Here you'll find everything you need to know about playing chess, laid out in simple, easy-to-understand language.",
    image: arbiterImg,
    roles: ["NextJs", "Firebase"],
    href: "https://chessarbiter.info/",
    githubLink: "https://github.com/Chess-Arbiter/handbook",
  },
  {
    title: "Chess arbiter mobile app (currently is testing)",
    text: "An open source multi language mobile app of chess rules. Here you'll find everything you need to know about playing chess, laid out in simple, easy-to-understand language. You can create your own tournaments and count rating changes",
    image: arbiterMobileImg,
    roles: ["React Native", "Firebase"],
    href: "https://play.google.com/store/apps/details?id=com.chess_arbiter.chessarbitermobile",
    githubLink: "https://github.com/Chess-Arbiter/mobile",
  },
  {
    title: "Ararat region chess federation official website",
    text: "The official open source website of the Ararat region chess federation. History of the federation, list of trainers, branches, news and much more.",
    image: araratRegionImg,
    roles: ["Strapi (Koa + React)", "MySQL", "NextJs", "Docker", "Nginx"],
    href: "https://ararat.chessnews.am/",
    githubLink: "https://github.com/Ararat-chess-federation/website",
  },
];

export const FUN_PROJECTS: IProject[] = [
  {
    title: "Chess",
    text: "Chess game according to all the rules",
    image: chessImg,
    roles: [],
    href: "https://react-ts-chess-henna.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/react-ts-chess",
  },
  {
    title: "Chess Engine",
    text: "Simple chess game with my bot",
    image: chessEngineImg,
    roles: [],
    href: "https://chess-engine-green.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Chess-engine",
  },
  {
    title: "TicTacToe Engine",
    text: "TicTacToe game with choice of side and difficulty",
    image: ticTacToeEngineImg,
    roles: [],
    href: "https://tic-tac-toe-engine.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/TicTacToe-Engine",
  },
  {
    title: "2048",
    text: "The well-known game 2048",
    image: game2048Img,
    roles: [],
    href: "https://2048-peach.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/2048",
  },
  {
    title: "Minesweeper",
    text: "Minesweeper according to all the rules",
    image: mineSweeperImg,
    roles: [],
    href: "https://minesweeper-rouge-six.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/minesweeper",
  },
];
