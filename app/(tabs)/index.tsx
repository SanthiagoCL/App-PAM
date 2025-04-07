import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Index () {
  return (
    
    <ScrollView>
      <View>
        <Text style={styles.text}>Lugares populares</Text>
      </View>

      <View style={styles.viewPrincipal}>
        <View style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/details/2162882_niladri-lake-sunamganj-Bangladesh.jpg",
            }}
          />
          <Text>Lugar 1</Text>
          <Text>Price 470$</Text>
          <Text>⭐⭐⭐⭐4.0</Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: "https://www.steppestravel.com/app/uploads/2019/07/pool-casa-las-tortugas-isla-holbox-mexico-1024x544.jpg",
            }}
          />
          <Text>Lugar 2</Text>
          <Text>Price 290$</Text>
          <Text>⭐⭐2.0</Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: "https://pix10.agoda.net/hotelImages/108/10825/10825_15102810490037233735.jpg?s=1024x768",
            }}
          />
          <Text>Lugar 3</Text>
          <Text>Price 300$</Text>
          <Text>⭐⭐⭐⭐⭐ 5.0</Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: "https://exp.cdn-hotels.com/hotels/19000000/18800000/18798800/18798741/f3a8159e_y.jpg?impolicy=fcrop&w=1000&h=666&q=medium",
            }}
          />
          <Text>Lugar 4</Text>
          <Text>Price 500$</Text>
          <Text>⭐⭐⭐3.0</Text>
        </View>

      </View>
    </ScrollView>
  );
}

//Criar os estilos separadamente
const styles = StyleSheet.create({
  viewPrincipal: {
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    
    
  },

  imagem: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 120,
    width: 180,
    boxShadow: "0px 0px 10px rgba(0,0,0,0.9)",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
    margin: 30,
    marginTop: 20,
  },

  card: {
    margin: 10,
    width: 180,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
  },

  textCard: {},
});
