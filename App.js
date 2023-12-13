import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`h-full flex flex-row items-center justify-center`}>
      <Text>Welcome to the Jungle!</Text>
      <StatusBar style="auto" />
    </View>
  );
}