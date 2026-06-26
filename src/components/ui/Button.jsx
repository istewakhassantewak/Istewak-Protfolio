import { Link } from 'react-router-dom';

const VARIANTS = {
  primary:
    'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]',
  secondary: 'glass text-text hover:bg-white/10 hover:border-primary/50 border border-white/10',
  outline: 'border border-primary/50 text-primary hover:bg-primary/10 hover:scale-[1.02]',
  ghost: 'text-text/70 hover:text-text hover:bg-white/5',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  download,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer';
  const classes = `${base} ${VARIANTS[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    const isAsset = /\.(pdf|png|jpg|jpeg|webp)$/i.test(href);
    const isRoute = href.startsWith('/') && !isExternal && !isAsset;

    if (isRoute) {
      return (
        <Link to={href} className={classes} onClick={onClick} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        download={download}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
