import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize';

import {
    responsiveFontSize
} from "react-native-responsive-dimensions";

import FontAwsome from 'react-native-vector-icons/FontAwesome'
import allColor from '../Resources/Colors/Color';
import strings from '../Resources/Strings/strings';

const phoneFill = <FontAwsome name="phone" size={40} color="white" />;

const ContactComponent = () => {
  return (
    <View style={styles.contact_container}>
    {phoneFill}
    <View style={styles.sub_contact_container}>
        <Text style={[styles.query_text]}>
            {strings.contact_us_text}
        </Text>

        <Text style={styles.phone_number}>
          {strings.contact_mobile_number}
        </Text>
    </View>
</View>
  )
}

export default ContactComponent

const styles = StyleSheet.create({
    contact_container: {
        backgroundColor: allColor['primary-color'],
        marginTop: normalize(20),
        marginHorizontal: normalize(20),
        padding: normalize(30),
        borderRadius: normalize(20),
        flexDirection: 'row',
        alignItems:"center"
    },
    sub_contact_container: {
        marginHorizontal: normalize(20)
    },
    query_text: {
        color: 'white',
        textAlign: 'center'
    },
    phone_number: {
        color: "white",
        textAlign: 'center',
        fontSize: responsiveFontSize(2.2),
        fontWeight: "600"
    }
})