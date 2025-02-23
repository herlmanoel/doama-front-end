export const LinkLabel = ({ href, children }: { href: string; children: React.ReactNode  }) => (
    <a href={href}>
      <span className="underline label-text-alt">{children}</span>
    </a>
  );