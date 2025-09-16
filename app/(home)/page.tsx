import './home.css';
import HomeHook from './hook';

import Link from 'next/link';
import Image from 'next/image';

import HeroButton from '@/components/hero/button';
import Github from '@/components/hero/github';

export default function HomePage() {
  return (
    <HomeHook>
      <main className="flex flex-1 flex-col gap-8 justify-center items-center">
        <div className="hero-background absolute inset-0 -z-1"></div>
        <Image className="hero-logo" src="/logo.svg" alt="Hero Logo" width={350} height={350} />
        <div className="flex flex-row flex-wrap gap-3 justify-center items-center ml-4 mr-4">
          <Link href="/docs">
            <HeroButton>开始阅读</HeroButton>
          </Link>
          <Link href="https://github.com/FrexCheat/DevBeginner-Doc" target="_blank" rel="noopener noreferrer">
            <HeroButton><Github />GitHub</HeroButton>
          </Link>
        </div>
      </main>
    </HomeHook>
  );
}
