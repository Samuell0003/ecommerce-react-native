import { FlatList, StyleSheet } from "react-native";
import Card from "./Card";

export default function ListCards() {
    const products = [{
        id: 1,
        image: require('../assets/01-tablelamps.png'),
        title: "Abajur"
    },
    {
        id: 2,
        image: require('../assets/02-ceilinglamps.png'),
        title: "Lâmpada de teto"
    },
    {
        id: 3,
        image: require('../assets/03-sconces.png'),
        title: "Arandela"
    },
    {
        id: 4,
        image: require('../assets/04-floorlamps.png'),
        title: "Luminaria de chao"
    },
    {
        id: 5,
        image: require('../assets/05-lightdecor.png'),
        title: "Luminaria"
    },
    {
        id: 6,
        image: require('../assets/06-garlands.png'),
        title: "Arandela"
    }
    ]

    

    const renderItem = ({ item }) => (
        <Card
            image={item.image}
            title={item.title}
            item={styles.item}
        />
    );

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.container}
            numColumns={2}
                        
        />
    )


}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       marginTop: 20
    }
});