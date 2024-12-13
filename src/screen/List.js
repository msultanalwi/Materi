// GANTI INDEX AJA  

import React, {useState} from "react"
import {View, Text, Modal, Button} from "react-native"

const List = () => {
    const [isVisible, setIsVisible] = useState (false)

    const requestCloseModal = () => {
        setIsVisible(false)
    }

    const openModal = () => {
        setIsVisible(true)
        // console.log("hello");
        
    }
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <Modal visible={isVisible} animationType="fade" onRequestClose={() => requestCloseModal ()} transparent={true}>
            
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{height: '30%', width: '90%', backgroundColor: 'white', justifyContent: "center", alignItems:"center"}}>
                    <Text style={{color: "red", textAlign: "center"}}>Are you sure want to logout?</Text>
                    <Button title="Logout" onPress={() => requestCloseModal()}/>
                    </View>
            </View>
            </Modal>
            <Text style={{color: 'red'}}>App js</Text>
            <Button title='Open Modal' onPress={() => openModal()} />
        </View>
    )
}
 export default List