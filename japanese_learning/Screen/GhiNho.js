import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import hiraganaCharacters from '../components/hiraganaData';
import KatakanaCharacters from '../components/katakanaData';
import romaji from '../components/RomajiData';
const { width } = Dimensions.get('window');

const numColumns = 1; // Số cột trong danh sách câu hỏi
const numAnswers = 4; // Số lựa chọn đáp án
const cellWidth = Math.floor(width); // Chiều rộng của mỗi ô

const GhiNhoScreen = () => {
  const [questions, setQuestions] = useState([]); // Danh sách câu hỏi và đáp án

  useEffect(() => {
    generateQuestions();
  }, []);

  // Tạo câu hỏi và đáp án ngẫu nhiên
  const generateQuestions = () => {
    const newQuestions = [];
    while (newQuestions.length < numColumns) {
      const randomIndex = Math.floor(Math.random() * (KatakanaCharacters.length + hiraganaCharacters.length));

      let questionCharacter;
      let isHiragana = false;

      // Kiểm tra xem câu hỏi sẽ lấy từ KatakanaCharacters hay hiraganaCharacters
      if (randomIndex < KatakanaCharacters.length) {
        questionCharacter = KatakanaCharacters[randomIndex];
      } else {
        questionCharacter = hiraganaCharacters[randomIndex - KatakanaCharacters.length];
        isHiragana = true;
      }

      // Kiểm tra nếu questionCharacter không phải là null
      if (questionCharacter !== null) {
        // Lấy 4 đáp án ngẫu nhiên từ romaji
        const answerOptions = getRandomAnswerOptions(romaji[isHiragana ? hiraganaCharacters.indexOf(questionCharacter) : KatakanaCharacters.indexOf(questionCharacter)]);

        newQuestions.push({
          id: newQuestions.length.toString(),
          question: questionCharacter,
          isHiragana: isHiragana,
          answers: answerOptions,
          correctAnswer: romaji[isHiragana ? hiraganaCharacters.indexOf(questionCharacter) : KatakanaCharacters.indexOf(questionCharacter)],
        });
      }
    }
    setQuestions(newQuestions);
  };

  // Lấy 4 đáp án ngẫu nhiên từ romaji, bao gồm đáp án đúng
  const getRandomAnswerOptions = (correctAnswer) => {
    const answerOptions = [correctAnswer]; // Bắt đầu với đáp án đúng
    while (answerOptions.length < numAnswers) {
      const randomIndex = Math.floor(Math.random() * romaji.length);
      const randomAnswer = romaji[randomIndex];
      if (randomAnswer !== null && !answerOptions.includes(randomAnswer)) {
        answerOptions.push(randomAnswer);
      }
    }
    return shuffleArray(answerOptions); // Xáo trộn các đáp án để chúng không cố định ở vị trí đầu
  };

  // Hàm để xáo trộn mảng
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Kiểm tra câu trả lời
  const checkAnswer = (question, selectedAnswer) => {
    if (question.correctAnswer === selectedAnswer) {
      alert('Đáp án đúng!');
    } else {
      // Đáp án sai
      alert('Đáp án sai!');
    }

    // Tạo câu hỏi mới
    generateQuestions();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        renderItem={({ item }) => (
          <View style={styles.questionContainer}>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>
                {item.question}
              </Text>
              <Text>{item.isHiragana ? '(Hiragana)' : '(Katakana)'}</Text>
            </View>
            <View style={styles.answersContainer}>
              {item.answers.map((answer, index) => (
                <TouchableOpacity
                  key={index.toString()}
                  style={styles.answerButton}
                  onPress={() => checkAnswer(item, answer)}
                >
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  questionTextContainer: {
    flexDirection: 'row', // Để các phần tử con sắp xếp theo chiều ngang
    alignItems: 'center',
  },
  questionText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 50,
  },
  answersContainer: {
    flexDirection: 'row', // Xếp các đáp án theo chiều ngang
    justifyContent: 'space-between', // Cách đều các đáp án
    width: cellWidth * 0.8, // Sử dụng 80% chiều rộng của màn hình
    marginTop: 20,
  },
  answerButton: {
    backgroundColor: '#4390f7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  answerText: {
    fontSize: 18,
  },
});

export default GhiNhoScreen;
