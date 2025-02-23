export const AnchorButton = ({
    href,
    text,
    outline,
    success,
  }: {
    href: string;
    text: string;
    outline?: boolean;
    success?: boolean;
  }) => (
    <a className="width-button" href={href}>
      <button
        type="button"
        className={`btn ${outline ? 'btn-outline' : ''} ${
          success ? 'btn-success' : ''
        } w-full`}
      >
        {text}
      </button>
    </a>
  );
  