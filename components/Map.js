import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';


export default function App() {
    return (
        <MapView
            style={style.map}
            onLongPress={onLongPress}
        />
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width - 150,
        height: Dimensions.get('window').height,
    },
});