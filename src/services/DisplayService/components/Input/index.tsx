export const Input = ({ children, type, placeholder, register, name, autoComplete, value }) => {
  return (
    <div>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={value}
      />
      <div>{children}</div>
    </div>
  );
};
