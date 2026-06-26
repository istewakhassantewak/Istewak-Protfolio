import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiFirebase,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const iconMap = {
  react: SiReact,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss,
  git: SiGit,
  github: SiGithub,
  firebase: SiFirebase,
  vercel: SiVercel,
  vscode: VscVscode,
};

const colorMap = {
  react: 'text-cyan-400',
  javascript: 'text-yellow-400',
  tailwind: 'text-teal-400',
  html: 'text-orange-500',
  css: 'text-blue-500',
  git: 'text-orange-600',
  github: 'text-text',
  firebase: 'text-yellow-500',
  vercel: 'text-text',
  vscode: 'text-blue-400',
};

export default function TechIcon({ name, size = 24, className = '' }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={`${colorMap[name] || 'text-text'} ${className}`} />;
}
