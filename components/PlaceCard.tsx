import { View,Text, Image, styles,  } from "react-native";

export default function PlaceCard(){


    return(
        <View>
            <Text>meu componente </Text>
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
    )
}