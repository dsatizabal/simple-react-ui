import './styles.css';

const TextField = (props) => {
    return (
        <div className="TextFieldContainer">
            <div className="TextFieldLabel">{props.label}</div>
            <textarea cols={150} rows={10} value={props.contents} onChange={props.changeHandler} />
        </div>
    );
  }

  export default TextField;
