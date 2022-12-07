import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feed } from "../../model/Feed";

interface ListaProps {
  data: Feed;
}

const Lista = (props: ListaProps) => {
  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image
          source={{ uri: props.data.imgperfil }}
          style={styles.fotoPerfil}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{ uri: props.data.imgPublicacao }}
        style={styles.fotoFeed}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/like.png")}
            style={styles.icone}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require("../../../assets/send.png")}
            style={styles.icone}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{props.data.nome}</Text>
        <Text style={styles.descRodape}>{props.data.descricao}</Text>
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
});
