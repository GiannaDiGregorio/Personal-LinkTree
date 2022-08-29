function Box(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className={props.theme ? "boxdivdark" : "boxdiv"}>
        <h2 className={props.theme ? "darktextbox" : null}>{props.title}</h2>
      </div>
    </a>
  );
}

export default Box;
