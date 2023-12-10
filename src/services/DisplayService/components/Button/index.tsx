export const Button = ({ children, isDisabled }) => {
  return <button disabled={isDisabled}>{children}</button>;
};
