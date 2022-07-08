import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const First = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.content}>First Content</Text>
        </View>
    )
};  

export default First;