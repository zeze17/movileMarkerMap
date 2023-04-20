import React from 'react';
import { StyleSheet,Button,View } from "react-native";

export default ({onPressLeft, textLeft, togglePointsFilter,pointsFilter})=>{


    return(
        <View style={styles.panel}>
            <Button onPress={onPressLeft} title={textLeft}/>            
            <Button title={pointsFilter ? "Ocultar marcadores" : "Mostrar marcadores"} onPress={togglePointsFilter} />
        </View>
    )
}

const styles= StyleSheet.create({
    panel:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
    },
});