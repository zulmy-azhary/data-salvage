const Card = props => {
  return (
      <div className={`flex justify-center items-center flex-col border-solid border-[1px] rounded-md border-black/25 bg-primary shadow-[4px_4px_6px_rgba(0,0,0,0.25)] ${props.className}`}>
          {props.children}
      </div>
  );
};

export default Card;