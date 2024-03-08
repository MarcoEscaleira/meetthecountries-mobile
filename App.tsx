import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import WebView from "react-native-webview";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://meetthecountries.com/' }}
        />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webviewContainer: {
    flex: 1
  }
});
