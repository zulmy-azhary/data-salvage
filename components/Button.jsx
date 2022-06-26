const Button = props => {
  return <button className="Toggler" onClick={props.onClick}>{props.children}</button>;
}

export default Button;