import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feed } from "../../model/Feed";

interface ListaProps {
  data: Feed;
}

const Lista = (props: ListaProps) => {
  return (
    <View>
      <Text>Lista</Text>
    </View>
  );
};

export default Lista;

const styles = StyleSheet.create({});
