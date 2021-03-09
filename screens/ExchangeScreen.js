import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    Modal, 
    ScrollView, 
    KeyboardAvoidingView 
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class ExchangeScreen extends React.Component {
    constructor() {
        super();
        this.state={
            userName : '',
            description : '',
            itemName : ''
        }
    }

    addItem = (itemName, description) => {
        var userName = this.state.userName;
        db.collection("exchange_requests").add({
            "username" : userName,
            "item_name" : itemName,
            "description" : description
        });
        this.setState({
            itemName : '',
            description : ''
        });
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text : 'OK', onPress : ()=> {
                    this.props.navigation.navigate('HomeScreen');
                }}
            ]
        );
    }
    
    render() {
        return(
            <View>
                <TouchableOpacity
                    style = {[ styles.button, { marginTop : 10 }]}
                    onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
                >
                    <Text style = {{ color : '#ffff', fontSize : 18, fontWeight : 'bold' }}>Add Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
    }
});