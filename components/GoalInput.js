import React from 'react';
import GoalItem from './GoalItems';
import {TextInput, View, Button } from 'react-native';


const GoalInput = props => {
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Meta del curso"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addMeta} />
        </View>

    );
};

const styles = create ({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default GoalInput;