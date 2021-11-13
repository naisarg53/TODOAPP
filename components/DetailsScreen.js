import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { TodoContext } from '../Context/TodoContext';

const DetailsScreen = ({ navigation }) => {    

    const { state } = React.useContext(TodoContext);
    const id = navigation.getParam('id');
    const note = state.find((record) => {
        return record.id === id
    })

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{note.title}</Text>
            <Text>{note.content}</Text>
            <Button
                title="Edit"
                onPress={() => navigation.navigate('Update', { id })}

            />
        </View>
    );
}

export default DetailsScreen;