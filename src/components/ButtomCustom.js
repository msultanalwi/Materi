import React from "react"
import {Button} from "react-native"

const ButtonCustom = ({titleCustom="title", colorCustom="blue", userPress = () => {}}) => {
    return (
        <Button title={titleCustom} color={colorCustom} onPress={userPress}/>
    )
}

export default ButtonCustom