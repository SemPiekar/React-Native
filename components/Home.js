import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Dimensions } from "react-native";
import notes from "./api/notes.json";

export default function Home() {
  const maxNoteHeight = Dimensions.get("window").height / 4;
  const buttonSize = 25;

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Welcome to the Jungle!</Text>

      {notes.notes.map((note) => (
        <View
          key={note.id}
          style={[tw`mb-4 border p-2`, { maxHeight: maxNoteHeight }]}
        >
          <Text style={tw`text-xl font-bold`}>{note.title}</Text>
          <Text numberOfLines={4}>{note.description}</Text>
        </View>
      ))}
      <View style={tw`flex w-full ml-auto mt-auto`}>
        <TouchableOpacity
          style={tw`rounded-full bg-blue-500 p-2 w-${buttonSize} h-${buttonSize} justify-center items-center`}
          onPress={() => {
          }}
        >
          <Text style={tw`text-white text-15`}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
