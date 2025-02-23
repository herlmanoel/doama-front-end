export const CheckboxLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="checkbox" className="checkbox h-5 w-5 mr-1" />
        <span className="label-text-alt">{children}</span>
      </label>
    </div>
  );
  