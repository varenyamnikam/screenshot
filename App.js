import React, { useState, useEffect } from 'react';
import WebView from 'react-native-webview';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const handleConnectivityChange = (connectionInfo) => {
      setIsConnected(connectionInfo.isConnected);
    };

    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

    return () => {
      unsubscribe();
    };
  }, []);

  const targetUri = 'http://cute-dasik-ed547b.netlify.app/'; // Replace with your target URI

  return (
    <View style={styles.container}>
      {isConnected ? (
        <WebView source={{ uri: targetUri }} />
      ) : (
        <Text style={styles.noConnectionText}>Check your internet connection</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noConnectionText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default App;

