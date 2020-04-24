import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

import Card from '../components/Card';
import Input from '../components/Input';

const StartGameScreen = props => {
    return (
        <View style={{flex:1,padding:10,alignItems:'center'}}>
            <Text style={{fontSize: 20, marginVertical: 10}}> The Game Screen </Text>
                <Card style={{alignItems:'center',shadowColor:'red',shadowOffset: {width:0, height:2}, shadowRadius:6, shadowOpacity:0.26, backgroundColor: 'white' ,elevation:5, padding:20, borderRadius: 10}}>
                    <Text>Select A Number !</Text>
                    <Input 
                        style={{height:30,width: 100, borderBottomColor: 'grey', borderWidth:1, marginVertical:10}} 
                        blurOnSumbmit 
                        autoCapitalize='none' 
                        autoCapitalize={false} 
                        keyboardType="numeric"
                        maxLength={2}
                    />

                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15}}>
                        <View style={{width:100}}>
                            <Button title="Reset" onPress={() => {}} color="#c717fc" />
                        </View>
                        <View style={{width:100}}>
                            <Button title="Confirm" onPress={() => {}} color="#f7287b"/>
                        </View> 
                    </View>
                </Card>
        </View>
    );
}


export default StartGameScreen;
