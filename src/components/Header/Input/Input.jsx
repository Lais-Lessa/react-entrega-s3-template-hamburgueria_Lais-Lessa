export const Input = ({ type, placeholder, ...rest }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} {...rest} />
    </>
  );
};
