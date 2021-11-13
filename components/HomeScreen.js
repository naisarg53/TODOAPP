import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { TodoContext } from '../Context/TodoContext';

const HomeScreen = ({ navigation }) => {
    const {state, dispatch} = React.useContext(TodoContext);
    return (
        <View>
            <Button
                title="Add"
                onPress={() => navigation.navigate('Create')}
                
            />
            {state.map((list, i) => (
                <View key={i} value={list} style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, elevation: 4, marginBottom: 5, marginHorizontal: 10, marginVertical: 10, backgroundColor: "#FFF" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { id: list.id })}>
                    <Text style={{ fontSize: 22 }}>{list.title}</Text>
                        <Button title="Delete" onPress={() => dispatch({ type: "REMOVE", payload: list.id })} />
                    </TouchableOpacity>
                </View>
                ))}

        </View>
    );
}
export default HomeScreen;