import React, { useState } from "react";
import {View,Text,Modal, Button} from 'react-native'


const Modall = () => {
	const[modalVisible,setModalVisible] = useState(false)

	return (
		<View style={{flex:1,backgroundColor:'white'}}>

			{/* Modal */}
			<Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} animationType="fade" transparent={true}>
				<View style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'center',alignItems:'center'}}>
					<View style={{height:'50%', width:'70%', backgroundColor:'white'}}>

					</View>
				</View>
			</Modal>


			{/* Button */}
			<Button title="Close App" onPress={() => setModalVisible(true)}/>


			
		</View>	
	)
}

export default Modall