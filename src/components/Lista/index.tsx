import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feed } from "../../model/Feed";

interface ListaProps {
  data: Feed;
}

const Lista = (props: ListaProps) => {
  const [feed, setFeed] = useState<Feed>(props.data);

  const mostrarLikers = () => {
    if (feed.likers <= 0) {
      return;
    } else {
      return (
        <Text style={styles.likes}>
          {feed.likers} {feed.likers > 1 ? "curtidas" : "curtida"}
        </Text>
      );
    }
  };

  const curtir = () => {
    if (feed.likeada) {
      setFeed((prevState) => ({
        ...prevState,
        likeada: false,
        likers: prevState.likers - 1,
      }));
    } else {
      setFeed((prevState) => ({
        ...prevState,
        likeada: true,
        likers: prevState.likers + 1,
      }));
    }
  };

  const carregarIcone = (): HTMLImageElement => {
    return feed.likeada
      ? require(`../../../assets/likeada.png`)
      : require(`../../../assets/like.png`);
  };

  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image source={{ uri: feed.imgperfil }} style={styles.fotoPerfil} />
        <Text style={styles.nomeUsuario}>{feed.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{ uri: feed.imgPublicacao }}
        style={styles.fotoFeed}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={curtir}>
          <Image source={carregarIcone()} style={styles.icone} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require("../../../assets/send.png")}
            style={styles.icone}
          />
        </TouchableOpacity>
      </View>
      {mostrarLikers()}

      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{feed.nome}</Text>
        <Text style={styles.descRodape}>{feed.descricao}</Text>
      </View>
    </View>
  );
};

export default Lista;

const styles = StyleSheet.create({
  areaFeed: {},
  areaBtn: {
    flexDirection: "row",
    padding: 5,
  },
  icone: {
    width: 26,
    height: 26,
  },
  btnSend: {
    paddingLeft: 15,
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: "left",
    color: "#000",
    paddingLeft: 10,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoFeed: {
    flex: 1,
    height: 400,
    alignItems: "center",
  },
  viewPerfil: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  viewRodape: {
    flexDirection: "row",
    alignItems: "center",
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 5,
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: "#000",
  },
  likes: {
    fontWeight: "bold",
    marginLeft: 5,
  },
});
