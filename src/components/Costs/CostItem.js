import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
const CostItem = (props) => {
    const chengeDescriptionHandler = ()=>{
        console.log("Click");
    }
    return(
        <Card className={'cost-item'}>
            <CostDate date={props.date}></CostDate>
            <div className={'cost-item__description'}>
                <h2>{props.description}</h2>
                <div className={'cost-item__price'}>${props.price}</div>
            </div>
            <button onClick={chengeDescriptionHandler}>Изменить описание</button>
        </Card>
    );
}
export default CostItem;