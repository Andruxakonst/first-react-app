import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import {useState} from "react"; //Импортируем из Ract useSatate
const CostItem = (props) => {

    //const [Пполучаемая переменная, функция для установки нового значения] = useState(Переменная за которой следим для обновления интерфейса компонента)
    const [description, setDescription] = useState(props.description)

    //обрабатываем Click на элементе button
    const chengeDescriptionHandler = ()=>{
        //обновляем значение переменной props.description через setDescription
        //что вызовет обновление интерфейса комонента с заменой переменной
        setDescription(description+" New cost");
    }
    return(
        <Card className={'cost-item'}>
            <CostDate date={props.date}></CostDate>
            <div className={'cost-item__description'}>
                <h2>{description}</h2>
                <div className={'cost-item__price'}>${props.price}</div>
            </div>
            <button onClick={chengeDescriptionHandler}>Изменить описание</button>
        </Card>
    );
}
export default CostItem;