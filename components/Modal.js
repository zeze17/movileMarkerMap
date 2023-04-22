import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import MapView from 'react-native-maps';


export default ({ children, visibility }) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visibility}
        >
            <View style={styles.center}>
                <View style={styles.modalView}>
                    <Text>{children}</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    modalView: {
        minWidth:Dimensions.get('window').width -150,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    }
});