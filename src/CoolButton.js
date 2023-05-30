import './styles.css'
import Loader from "./loader.gif"

const CoolButton = (props) => {
    return (
        <div className='buttons-container'>
            {!props.loading ? <button className='button-arounder' onClick={props.clickHandler}>{props.caption}</button> :
            <img src={Loader} width={150} height={100} alt='' />}
        </div>
    );
}

export default CoolButton;
