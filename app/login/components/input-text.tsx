export const InputText = ({
    name,
    placeholder,
    required,
  }: {
    name: string;
    placeholder: string;
    required?: boolean;
  }) => (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="input input-bordered w-full"
      required={required}
    />
  );