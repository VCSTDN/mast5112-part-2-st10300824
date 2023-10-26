import  React, {useState, useEffect} from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import {AsyncStorage} from '@react-native-firebase/storage';

// Sookha. J. SELF

function HomeScreen({ navigation }) {
  const [title, setTitle] = useState('The Lord of The Rings');
  const [author, setAuthor] = useState('J.R. Tolkien');
  const [numPages, setNumPages] = useState(2448);
  const [genre, setGenre] = useState('Fantasy');
  const [totalPages, setTotalPages] = useState(8448);
  const [averagePages, setAveragePages] = useState(1232);
  
  return (
<View style={styles.container}>
      <Text style={styles.mainHeading}>Bookworm</Text>
      <Text style={styles.subHeading}>Add New Books</Text>
      <View style={styles.bookInfo}>

      <Image source={require('./assets/lotr.jpg')} style={styles.bookImage} />

      <View style={styles.bookDetails}>
          <Text>Title: {title}</Text>
          <Text>Author: {author}</Text>
          <Text>Number of Pages: {numPages}</Text>
          <Text>Total of Pages: {totalPages}</Text>
          <Text>Average Pages: {averagePages}</Text>
          <Text>Genre: {genre}</Text>
        </View>
      </View>      
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <TouchableOpacity
        style={styles.touchableOpacity}
        title="Enter Book"
        onPress={() => navigation.navigate('EnterBook')}
      >
        <Text style={{color: "white"}}>ENTER BOOK</Text>
        </TouchableOpacity>

    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button
        style={styles.menuButton}
        title="History"
        onPress={() => navigation.navigate('History')}
      />
<Button 
     title="Genre"
     onPress={() => navigation.navigate('Genre')}
     style={styles.menuButton}
     /> 
          
        
    </View>

    </View>
    
  );
}

// Sookha. J. SELF

function EnterBookScreen({ navigation }) {
  
  const [title, setTitle] = useState('The Lord of The Rings');
  const [author, setAuthor] = useState('J.R. Tolkien');
  const [numPages, setNumPages] = useState(2448);
  const [genre, setGenre] = useState('Fantasy');
  const [totalPages, setTotalPages] = useState(2448);
  const [averagePages, setAveragePages] = useState();

  // const [save] = async () => {
  //   try {
  //       await AsyncStorage.setTitle("myTitle", title);
  //   } catch (err) {
  //       Alert(err);
  //   }
  // };

  // const [load] = async () => {
  //   try {
  //     let title = await AsyncStorage.getItem("myTitle");
  //     if (title !== null) {
  //       setTitle(title);
  //     }
  //   } catch (err) {
  //     Alert(err);
  //   }
  // };

  // const [remove] = async () => {
  //   try {
  //     await AsyncStorage.removeItem("myTitle");
  //   } catch (err) {
  //     Alert(err);
  //   } finally {
  //       setTitle("");
  //   }
  // };

  // useEffect(() => {
  //   load();
  // }, []);



  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Bookworm</Text>
      <Text style={styles.subHeading}>ADD NEW BOOK</Text>
      <View style={styles.bookInfo}>

      <Image source={require('./assets/lotr.jpg')} style={styles.bookImage} />

      <View style={styles.bookDetails}>
          <Text>Title: {title}</Text>
          <Text>Author: {author}</Text>
          <Text>Number of Pages: {numPages}</Text>
          <Text>Genre: {genre}</Text>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(text) => setTitle(text)}/>
      <TextInput style={styles.input}/>
      <TextInput style={styles.input}/>
      <TextInput style={styles.input}/>
      </View>
      

      {/* <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => save()}>
        <Text style={{color: "white"}}>SAVE BOOK</Text>
        </TouchableOpacity> */}

    </View>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="GENRES"
        onPress={() => navigation.navigate('Genre')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </View>
  );
}

// Sookha. J. SELF

function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Button 
     title="History"
     onPress={() => navigation.navigate('History')}
     style={styles.menuButton}
     /> 
        <Button title="Go back" onPress={() => navigation.goBack() } />
    </View>
  );
}

function GenreScreen({ navigation }) {

  const genreList = [
    {id: '1' ,name: 'Action and adventure', category: 'Fiction', count: 0},
    {id: '2' ,name: 'Alternate history', category: 'Fiction', count: 0},
    {id: '3' ,name: 'Anthology', category: 'Fiction', count: 0},
    {id: '4' ,name: 'Chick lit', category: 'Fiction', count: 0},
    {id: '5' ,name: 'Children', category: 'Fiction', count: 0},
    {id: '6' ,name: 'Classic', category: 'Fiction', count: 0},
    {id: '7' ,name: 'Comic book', category: 'Fiction', count: 0},
    {id: '8' ,name: 'Coming-of-age', category: 'Fiction', count: 0},
    {id: '9' ,name: 'Crime', category: 'Fiction', count: 0},
    {id: '10' ,name: 'Drama', category: 'Fiction', count: 0},
    {id: '11' ,name: 'Fairytale', category: 'Fiction', count: 0},
    {id: '12' ,name: 'Fantasy', category: 'Fiction', count: 0},
    {id: '13' ,name: 'Graphic novel', category: 'Fiction', count: 0},
    {id: '14' ,name: 'Historical fiction', category: 'Fiction', count: 0},
    {id: '15' ,name: 'Horror', category: 'Fiction', count: 0},
    {id: '16' ,name: 'Mystery', category: 'Fiction', count: 0},
    {id: '17' ,name: 'Paranormal romance', category: 'Fiction', count: 0},
    {id: '18' ,name: 'Picture book', category: 'Fiction', count: 0},
    {id: '19' ,name: 'Poetry', category: 'Fiction', count: 0},
    {id: '20' ,name: 'Political thriller', category: 'Fiction', count: 0},
    {id: '21' ,name: 'Romance', category: 'Fiction', count: 0},
    {id: '22' ,name: 'Satire', category: 'Fiction', count: 0},
    {id: '23' ,name: 'Science fiction', category: 'Fiction', count: 0},
    {id: '24' ,name: 'Short story', category: 'Fiction', count: 0},
    {id: '25' ,name: 'Suspense', category: 'Fiction', count: 0},
    {id: '26' ,name: 'Thriller', category: 'Fiction', count: 0},
    {id: '27' ,name: 'Western', category: 'Fiction', count: 0},
    {id: '28' ,name: 'Young adult', category: 'Fiction', count: 0},
    {id: '29' ,name: 'Art/architecture', category: 'Non-fiction', count: 0},
    {id: '30' ,name: 'Autobiography', category: 'Non-fiction', count: 0},
    {id: '31' ,name: 'Biography', category: 'Non-fiction', count: 0},
    {id: '32' ,name: 'Business/economics', category: 'Non-fiction', count: 0},
    {id: '33' ,name: 'Crafts/hobbies', category: 'Non-fiction', count: 0},
    {id: '34' ,name: 'Cookbook', category: 'Non-fiction', count: 0},
    {id: '35' ,name: 'Diary', category: 'Non-fiction', count: 0},
    {id: '36' ,name: 'Dictionary', category: 'Non-fiction', count: 0},
    {id: '37' ,name: 'Encyclopedia', category: 'Non-fiction', count: 0},
    {id: '38' ,name: 'Guide', category: 'Non-fiction', count: 0},
    {id: '39' ,name: 'Health/fitness', category: 'Non-fiction', count: 0},
    {id: '40' ,name: 'History', category: 'Non-fiction', count: 0},
    {id: '41' ,name: 'Home and garden', category: 'Non-fiction', count: 0},
    {id: '42' ,name: 'Humor', category: 'Non-fiction', count: 0},
    {id: '43' ,name: 'Journal', category: 'Non-fiction', count: 0},
    {id: '44' ,name: 'Math', category: 'Non-fiction', count: 0},
    {id: '45' ,name: 'Memoir', category: 'Non-fiction', count: 0},
    {id: '46' ,name: 'Philosophy', category: 'Non-fiction', count: 0},
    {id: '47' ,name: 'Prayer', category: 'Non-fiction', count: 0},
    {id: '48' ,name: 'Religion, spirituality, and new age', category: 'Non-fiction', count: 0},
    {id: '49' ,name: 'Textbook', category: 'Non-fiction', count: 0},
    {id: '50' ,name: 'True crime', category: 'Non-fiction', count: 0},
    {id: '51' ,name: 'Review', category: 'Non-fiction', count: 0},
    {id: '52' ,name: 'Science', category: 'Non-fiction', count: 0},
    {id: '53' ,name: 'Self help', category: 'Non-fiction', count: 0},
    {id: '54' ,name: 'Sports and leisure', category: 'Non-fiction', count: 0},
    {id: '55' ,name: 'Travel', category: 'Non-fiction', count: 0},
    {id: '56' ,name: 'True crime', category: 'Non-fiction', count: 0}
   ];
  const [selectedLanguage, setSelectedLanguage] = useState();
	const [genre, setGenre] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.dispText}>PICKER EXAMPLE</Text> 
			<Picker
				selectedValue={genreList}
				onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
			>
				<Picker.Item label='Fiction' value='Action and adventure' />
				<Picker.Item label='Non-fiction' value='Children' />
			</Picker>

      <Text style={styles.dispText}>
				</Text>

      <Picker
				selectedValue={genre}
				onValueChange={(item2Value, item2Index) => setGenre(item2Value)}
        >
				{genreList.map(genre => <Picker.Item key={genre.id} label={genre.name} value={genre.name}/>)}
			</Picker>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <TouchableOpacity
        style={styles.touchableOpacity}
        title=""
        onPress={() => navigation.navigate('')}
      >
        <Text>SAVE BOOK</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

// Sookha. J. SELF

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="EnterBook" component={EnterBookScreen} />
      <Stack.Screen name="Genre" component={GenreScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignSelf: "stretch",
  },

  input: {
    
    borderWidth: 1,
    borderColor: "#575DD9",
    alignSelf: "stretch",
    // marginTop: 4,
    margin: 10,
    height: 44,
    
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: "300",
    
  },
  mainHeading: {
    fontSize: 47,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 28,
    marginBottom: 20,
  },
  bookInfo: {
    flexDirection: 'row',
  },
  bookImage: {
    width: 300,
    height: 400,
    marginRight: 15,
    flex: 1,
  },
  dispText: {
		margin: 24,
		fontSize: 32,
		textAlign: 'center',
	},

  touchableOpacity: {
    
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#75E07F',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignself: "stretch",
    marginHorizontal: 32,
    marginTop: 32,
  },
  bookDetails: {
    fontSize: 28,
    flex: 1,
  },
  blocks: {
    marginTop: 20,
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: '#75E07F',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 62,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    backgroundColor: '#B29BFA',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
});

// Sookha. J. SELF

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// Sookha. J. 
// SELF
// 2023