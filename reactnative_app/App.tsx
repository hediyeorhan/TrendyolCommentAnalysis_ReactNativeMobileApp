import React, { useState, useEffect, SetStateAction } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

const App = () => {
  const [texts, setTexts] = useState([]);
  const [positiveTexts, setPositiveTexts] = useState<string[]>([]);
  const [negativeTexts, setNegativeTexts] = useState<string[]>([]);
  const [neutralTexts, setNeutralTexts] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryCounts, setCategoryCounts] = useState({
    Positive: 0,
    Negative: 0,
    Neutral: 0,
  });
  const [urlInput, setUrlInput] = useState('');
  const [error, setError] = useState<SetStateAction<string | null>>(null);

  const fetchDataFromAPI = async (url:string) => {
    try {
      if (!url) {
        setError('URL is empty. Requests cannot be made !');
        return;
      }
  
      // Yeni bir URL ile API çağrısı yapılacağı zaman, ilgili state'leri temizle
      setPositiveTexts([]);
      setNegativeTexts([]);
      setNeutralTexts([]);
      setCategoryCounts({
        Positive: 0,
        Negative: 0,
        Neutral: 0,
      });
  
      const response = await fetch('http://192.168.0.28:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      });
  
      const data = await response.json();
  
      // Hata durumu mesajını sıfırla
      setError(null);
  
      // Örnek olarak, API'den gelen verilerin yapısını kontrol et
      const { prediction } = data;
  
      // Her bir örnek metni işle
      Object.keys(prediction).forEach((textKey) => {
        const { sentiment, confidence } = prediction[textKey];
  
        // Sentiment ve confidence değerlerine göre uygun state'i güncelle
        if (sentiment === 'Positive') {
          setPositiveTexts((prevTexts) => [...prevTexts, textKey]);
          setCategoryCounts((prevCounts) => ({ ...prevCounts, Positive: prevCounts.Positive + 1 }));
        } else if (sentiment === 'Negative') {
          setNegativeTexts((prevTexts) => [...prevTexts, textKey]);
          setCategoryCounts((prevCounts) => ({ ...prevCounts, Negative: prevCounts.Negative + 1 }));
        } else {
          setNeutralTexts((prevTexts) => [...prevTexts, textKey]);
          setCategoryCounts((prevCounts) => ({ ...prevCounts, Neutral: prevCounts.Neutral + 1 }));
        }
      });
    } catch (error) {
      console.error('API Call Error:', error);
      setError('API call failed !');
    }
  };
  

  const handleFetchData = async () => {
    // Verileri al butonuna basıldığında fetchDataFromAPI fonksiyonunu çağır
    console.log('The Get Data button was pressed. Initiating API call ..');
    await fetchDataFromAPI(urlInput);
    console.log('API call completed !');
  };

  const renderTextList = (data: string[], color: string) => {
    return (
      <View style={[styles.listContainer, { borderColor: color }]}>
        {data.length === 0 ? (
          <Text style={[styles.noText, { color }]}>No Text</Text>
        ) : (
          data.map((item, index) => (
            <Text key={index} style={[styles.listItem, { color }]}>
              <Text style={styles.bold}>{`${index + 1})`}</Text> {item}
            </Text>
          ))
        )}
      </View>
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  return (
    <>
    <View style={{height:50,width:"100%",backgroundColor:"orange",  justifyContent:"center",alignItems:"center",marginBottom:10}}>
    <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold",color:"#fff"}}>Trendyol Comment Analysis</Text>
  </View>
    <ScrollView style={styles.container}>
     
      <TextInput
        style={styles.input}
        placeholder="Enter the URL address of the product you want to analyze .."
        onChangeText={(text) => setUrlInput(text)}
        value={urlInput}
      />
      <Button
        title="GET DATA"
        onPress={handleFetchData} 
      />
      {error && <Text style={styles.errorText}>{error.toString()}</Text>}
      <TouchableOpacity onPress={() => toggleCategory('Negative')}>
        <View
          style={[
            styles.categoryButton,
            styles.categoryButtonNegatif,
            selectedCategory === 'Negative' && styles.selectedCategory,
          ]}
        >
          <Text style={styles.categoryText}>{`NEGATIVE (${categoryCounts.Negative})`}</Text>
        </View>
      </TouchableOpacity>
      {selectedCategory === 'Negative' && renderTextList(negativeTexts, '#000')}

      <TouchableOpacity onPress={() => toggleCategory('Positive')}>
        <View
          style={[
            styles.categoryButton,
            styles.categoryButtonPozitif,
            selectedCategory === 'Positive' && styles.selectedCategory,
          ]}
        >
          <Text style={styles.categoryText}>{`POSITIVE (${categoryCounts.Positive})`}</Text>
        </View>
      </TouchableOpacity>
      {selectedCategory === 'Positive' && renderTextList(positiveTexts, '#000')}

      <TouchableOpacity onPress={() => toggleCategory('Neutral')}>
        <View
          style={[
            styles.categoryButton,
            styles.categoryButtonNotr,
            selectedCategory === 'Neutral' && styles.selectedCategory,
          ]}
        >
          <Text style={styles.categoryText}>{`NEUTRAL (${categoryCounts.Neutral})`}</Text>
        </View>
      </TouchableOpacity>
      {selectedCategory === 'Neutral' && renderTextList(neutralTexts, '#000')}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 8,
    marginVertical: 10,
  },
  categoryButtonNegatif: {
    backgroundColor: '#FF8080',
  },
  categoryButtonPozitif: {
    backgroundColor: '#80FF80',
  },
  categoryButtonNotr: {
    backgroundColor: '#FFFF80',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedCategory: {
    borderWidth: 2,
    borderColor: '#000',
  },
  listContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  listItem: {
    fontSize: 18,
    marginBottom: 5,
  },
  noText: {
    fontStyle: 'italic',
  },
  bold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default App;
