import { View, Text, Image } from "react-native";

export default function Header() {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 25 }}>
            <Text style={{ color: 'black',  alignItems: "center", fontSize: 32, fontWeight: "bold" }}>Lighteria</Text>
            <View style={{backgroundColor: "white", height: 75, width:75, borderRadius: '50%', alignItems:"center", justifyContent:"center"}}>
                <Image
                    source={require('../assets/icone-sacola.png')}
                    style={{ width: 40, height: 40, backgroundColor: 'white' }}
                />
            </View>
        </View>
    )
}