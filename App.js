import React, { useState } from 'react';
import { 
        StyleSheet,
        View, 
        Button, 
        FlatList 
        } from 'react-native';
        
import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });  
};

  

  return (
    <View style={style.screen}>
    <Button title = "Añadir nueva meta" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
        <FlatList
          keyExtractor= {(item,index) => item.id}
          data={courseGoals}
          renderItem={itemData => 
          <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value} /> 
          }
        />
    </View>
  );
}

style = StyleSheet.create ({
  screen: {
    padding:50
  }
})
