import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TodoContext } from '../Context/TodoContext';

const AddScreen = ({ navigation }) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const { state, dispatch } = React.useContext(TodoContext);

    return (
        <View style={{ flex: 1, margin: 8 }}>
            <Text style={{ fontSize: 22 }}>Enter Title</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={style.input}
            />
            <Text style={{ fontSize: 22 }}>Enter Content</Text>
            <TextInput value={content} onChangeText={(text) => setContent(text)} style={style.input} />
            <Button title="Create" onPress={() => {
                dispatch({ type: 'ADD_POST', payload: { title, content } })
                navigation.goBack()
            }} />
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10
    }
})
export default AddScreen;