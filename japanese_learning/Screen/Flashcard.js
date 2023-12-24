import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Button  } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import hiraganaCharacters from '../components/hiraganaData';
import KatakanaCharacters from '../components/katakanaData';
import romaji from '../components/RomajiData';
const Flashcard = () => {
  const [isFront, setIsFront] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [activeSet, setActiveSet] = useState('hiragana'); // new state to track active set
  const [shuffleCards, setShuffleCards] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const toggleCard = () => setIsFront(!isFront);
  const shuffleArray = array => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };
  const nextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFront(true);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFront(true);
    }
  };

  const switchToHiragana = () => {
    setActiveSet('hiragana');
    setCurrentCardIndex(0);
    setIsFront(true);
  };

  const switchToKatakana = () => {
    setActiveSet('katakana');
    setCurrentCardIndex(0);
    setIsFront(true);
  };
  useEffect(() => {
    let newFlashcards = activeSet === 'hiragana' ? hiraganaCharacters : KatakanaCharacters;
    newFlashcards = newFlashcards.map((char, index) => ({
      id: index, question: char, answer: romaji[index]
    }));

    if (shuffleCards) {
      newFlashcards = shuffleArray([...newFlashcards]);
    }

    setFlashcards(newFlashcards);
    setCurrentCardIndex(0); // Reset index when flashcards change
  }, [shuffleCards, activeSet]);

  const onCheckBoxChange = () => {
    setShuffleCards(!shuffleCards);
  };
return (
  <View style={styles.container}>
    
    <View style={styles.switcher}>
      <View style={styles.Buttonstyles}>
      <Button 
        onPress={switchToHiragana}
        title="Hiragana"
        color="#4390f7"
      />
      </View>
      <View style={styles.Buttonstyles}>
      <Button
        onPress={switchToKatakana}
        title="Katakana"
        color="#4390f7"
      />
      </View>
      
    </View>
    <View style={styles.flashcard}>
        <TouchableOpacity onPress={toggleCard}>
          {flashcards.length > 0 && currentCardIndex < flashcards.length ? (
            <Text style={styles.cardText}>
              {isFront ? flashcards[currentCardIndex].question : flashcards[currentCardIndex].answer}
            </Text>
          ) : (
            <Text style={styles.cardText}>No flashcards available</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          value={shuffleCards}
          size={25}
          fillColor="red"
          unfillColor="#FFFFFF"
          text="Random"
          iconStyle={{ borderColor: "#4390f7" }}
          innerIconStyle={{ borderWidth: 2 }}
          isChecked={true}
          onPress={onCheckBoxChange}
        />
      </View>
    <View style={styles.navigation}>
      <View style={styles.Buttonstyles}>
          <Button
            onPress={prevCard}
            title="Previous"
            color="#4390f7"
          />    
      </View>
     <View style={styles.Buttonstyles}>
     <Button
        onPress={nextCard}
        title="Next"
        color="#4390f7"
      />
     </View>
      
    </View>
  </View>
);


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  switcher: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  switcherText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: 'red',
  },
  Buttonstyles:{
    borderRadius:20,
    margin:10,
  },
  flashcard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigation: {
    flexDirection: 'row',
    marginTop: 10,

  },
  navText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: 'blue',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Flashcard;
