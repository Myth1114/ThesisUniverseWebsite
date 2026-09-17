const Container = ({ children, wide = false, className = "" }) => {
  const classes = [wide ? "container-wide" : "container", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};

export default Container;
