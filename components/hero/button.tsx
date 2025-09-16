import './button.css';

export default function HeroButton({ children, ...props }: { children?: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="hero-button" {...props}>
      {children}
    </button>
  );
}