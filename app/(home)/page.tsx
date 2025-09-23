import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";

import './_styles/home.css';
import HomeHook from './_hooks/home';
import PathAnimation from './_ui/linear';

export default function HomePage() {
  return (
    <HomeHook>
      <main className="absolute inset-0 overflow-hidden flex flex-col justify-center items-center">
        <div className="hero-background absolute inset-0 -z-1"></div>
        <div className="relative w-[1640px] h-[400px] mt-20 flex flex-row justify-center items-center">
          <PathAnimation position="left" />
          <Image className="hero-logo sm:size-64 md:size-80 lg:size-96 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src="/logo.svg" alt="Hero Logo" width={350} height={350} />
          <PathAnimation position="right" />
        </div>
        <div className="flex flex-row flex-wrap gap-3 justify-between items-center">
          <Link href="/docs">
            <button className="hero-button">
              开 始 阅 读
            </button>
          </Link>
          <Link href="https://github.com/FrexCheat/DevBeginner-Doc" target="_blank" rel="noopener noreferrer">
            <button className="hero-button">
              <FaGithub size="1.3em" />GitHub
            </button>
          </Link>
        </div>

        {/* svg definitions */}
        <svg>
          <defs>
            <linearGradient
              id="base_gradient"
              x1="88.1032"
              y1="324.167"
              x2="843.505"
              y2="324.167"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#c6caff" stopOpacity="0" />
              <stop offset="0.2" stopColor="#c6caff" stopOpacity="0.1" />
              <stop offset="0.4" stopColor="white" stopOpacity="0.4" />
              <stop offset="0.6" stopColor="#c6caff" stopOpacity="0.2" />
              <stop offset="0.8" stopColor="#c6caff" stopOpacity="0.2" />
              <stop offset="0.9" stopColor="#c6caff" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="flow_light"
              cx="0.5"
              cy="0.5"
              r="0.5"
              fx="0.5"
              fy="0.5"
            >
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#5ce4ff" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#5ce4ff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#5ce4ff" stopOpacity="0.6" />
            </radialGradient>
            <filter
              id="glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.6" />
            </filter>
          </defs>
        </svg>
      </main>
    </HomeHook >
  );
}
