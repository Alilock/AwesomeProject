import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'

export default function App() {


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.styleView1}>
        <Text style={styles.styleText1}>Rmad102</Text>
        <Text style={styles.styleText1}>Rmad101</Text>
      </View>
      <View style={styles.styleView2}></View>
    </View>

  )
}

const styles = StyleSheet.create({
  styleView1: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  styleText1: {
    color: "black",
    fontSize: 24,
    fontWeight: "800"
  },
  styleView2: {
    flex: 2, backgroundColor: "pink"
  }


})


//flex 2 - 1 50%
// View - div 
//Text - p,span
//Button - button
// Flexbox - margin,padding, flex