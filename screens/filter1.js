import React from 'react';
import { View, Image } from 'react-native';
const Filter1 = ({
    face: {
        bounds:{
            size:{
                width:faceWidth,
                height:faceHeight
            }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const glassWidth = faceWidth
    const glassesHeight = faceHeight/3
    const transformAngle = (angleRAD = Math.atan((rightEyePosition.y-leftEyePosition.y)/(rightEyePosition.x-leftEyePosition.x))) =>{
        angleRAD*180/Math.PI
    }
    return (
        <View 
        style = {{
            position:"absolute",
            left:leftEyePosition.x-glassWidth*0.675,
            top:leftEyePosition.y-glassesHeight*0.5
        }} >
            <Image 
            source={require("../assets/glasses.png")}
            style = {{
                width:glassWidth,
                height:glassesHeight,
                resizeMode:"contain",
                transform:[{rotate:`${transformAngle()}deg`}]
            }} />
        </View>
    )
}
export default Filter1