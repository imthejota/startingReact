import ElementItem from "./ElementItem";
import List from '../UI/List'

export default function Elements(props) {
    return (
        <List>
            <ElementItem title={props.items[0].title} image={props.items[0].image} description={props.items[0].description} />
            <ElementItem title={props.items[1].title} image={props.items[1].image} description={props.items[1].description} />
            <ElementItem title={props.items[2].title} image={props.items[2].image} description={props.items[2].description} />
        </List>
    );
}
