function Box(props) {
  return (
    <a href={props.link} target="_blank">
      <div className={props.theme ? "boxdivdark" : "boxdiv"}>
        <h2 className={props.theme ? "dark" : null}>{props.title}</h2>
      </div>
    </a>
  );
}

export default Box;
