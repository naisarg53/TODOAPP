import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TodoContext } from '../Context/TodoContext';

const UpdateScreen = ({ navigation }) => {

    const id = navigation.getParam('id');
    const { state, dispatch } = React.useContext(TodoContext);

    const updateValue = state.find((record) => {
        return record.id === id
    })


    const [title, setTitle] = useState( updateValue.title )
    const [content, setContent] = useState(updateValue.content)

    return (
        <View style={{ flex: 1, margin: 8 }}>
            <Text style={{ fontSize: 22 }}>Update Title</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={style.input}
            />
            <Text style={{ fontSize: 22 }}>Update Content</Text>
            <TextInput value={content} onChangeText={(text) => setContent(text)} style={style.input} />
            <Button title="Update" onPress={() => {
                dispatch({ type: 'UPDATE_POST', payload: { id, title, content } })
                navigation.navigate('Home')
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
export default UpdateScreen;