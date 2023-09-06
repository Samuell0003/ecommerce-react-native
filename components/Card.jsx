import { Image, Text, View, StyleSheet } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.item}>
            <Image
                source={props.image}
                style={{  width: 100, height: 100, resizeMode: "contain" }}
            />
            <Text style={{fontSize: 16, color: 'black', width: 150, textAlign: 'center', marginTop: 10}}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical:45,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: "center",
        flexGrow: 0,
        paddingHorizontal: 75,
        borderRadius: 10
    }
});