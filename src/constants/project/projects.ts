import arbiterImg from "../../../public/images/arbiter.webp";
import arbiterMobileImg from "../../../public/images/arbiterMobile.webp";
import araratRegionImg from "../../../public/images/araratRegion.webp";
import chessImg from "../../../public/images/chess.webp";
import chessEngineImg from "../../../public/images/Chess-Engine.webp";
import ticTacToeEngineImg from "../../../public/images/tic-tac-toe-engine.webp";
import sdcImg from "../../../public/images/sdc.webp";
import getSmsImg from "../../../public/images/getSMS.webp";
import { IProject } from "../../models/project";

export const JOB_PROJECTS: IProject[] = [
  {
    title: "Get SMS",
    text: "Rent a virtual phone number from US to receive unlimited OTP/SMS",
    image: getSmsImg,
    roles: [
      "Express",
      "React",
      "Mongo",
      "Docker",
      "Nginx",
      "Stripe",
      "Unit testing",
    ],
    href: "https://get-sms.app",
  },
];

export const OPEN_SOURCE_PROJECTS: IProject[] = [
  {
    title: "Chess Arbiter",
    text: "Everything you need to know about playing chess. Available in multiple languages",
    image: arbiterImg,
    roles: ["NextJs", "Firebase"],
    href: "https://chessarbiter.info/",
    githubLink: "https://github.com/Chess-Arbiter/handbook",
  },
  {
    title: "Chess arbiter mobile app (currently is testing)",
    text: "Mobile app for Chess Arbiter",
    image: arbiterMobileImg,
    roles: ["React Native", "Firebase"],
    href: "https://play.google.com/store/apps/details?id=com.chess_arbiter.chessarbitermobile",
    githubLink: "https://github.com/Chess-Arbiter/mobile",
  },
  {
    title: "Ararat region chess federation official website",
    text: "The official website of the Ararat Region Chess Federation. My gift to the federation.",
    image: araratRegionImg,
    roles: ["Strapi (Koa + React)", "MySQL", "NextJs", "Docker", "Nginx"],
    href: "https://ararat.chessnews.am/",
    githubLink: "https://github.com/Ararat-chess-federation/website",
  },
];

export const FUN_PROJECTS: IProject[] = [
  {
    title: "Chess",
    text: "Offline Chess for two players according to all FIDE rules",
    image: chessImg,
    roles: [],
    href: "https://react-ts-chess-henna.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/react-ts-chess",
  },
  {
    title: "Chess Engine",
    text: "Simple Chess Engine that plays somewhere at the elo 1300-1400 level.",
    image: chessEngineImg,
    roles: [],
    href: "https://chess-engine-green.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/Chess-engine",
  },
  {
    title: "Tic Tac Toe Engine",
    text: "A Tic Tac Toe engine where the user can choose to play as X or O and select the difficulty level",
    image: ticTacToeEngineImg,
    roles: [],
    href: "https://tic-tac-toe-engine.vercel.app/",
    githubLink: "https://github.com/ArtyomSukiasyan/TicTacToe-Engine",
  },
];
