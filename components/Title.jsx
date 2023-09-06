import { View, Text } from "react-native";

export default function Title() {
    return (
        <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", paddingHorizontal: 25}}>
            <View style={{borderColor:'black', borderWidth: 1, width:'35%', height:0}}></View>
            <Text style={{fontSize:16}}>Categorias</Text>
            <View style={{borderColor:'black', borderWidth: 1,width:'35%',  height:0}}></View>
        </View>
    )
}