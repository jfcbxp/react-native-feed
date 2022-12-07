import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import Lista from "./src/components/Lista";
import { Feed } from "./src/model/Feed";
import { useFeedService } from "./src/service/feed.service";

export default function App() {
  const service = useFeedService();
  const [feed, setFeed] = useState<Feed[]>(service.listar());

  const renderItem: ListRenderItem<Feed> = ({ item }) => <Lista data={item} />;
  const keyItem: (item: Feed) => string = (item: Feed) => item.id;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("./assets/send.png")} style={styles.send} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyItem}
        data={feed}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 55,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 1,
  },
  logo: {},
  send: {
    width: 23,
    height: 23,
  },
});
