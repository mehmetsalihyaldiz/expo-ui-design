import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#826CFF",
      }}
    >
      <StatusBar hidden={true} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 30,
        }}
      >
        <View>
          <Ionicons name="arrow-back" size={24} color="white" />
        </View>
        <Text
          style={{
            color: "white",
          }}
        >
          Atla
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          elevation: 24,
          marginHorizontal: 20,
          marginTop: 50,
          borderRadius: 30,
          flex: 1,
          marginBottom: 150,
        }}
      >
        <View>
          <Text
            style={{
              color: "#26325D",
              fontSize: 32,
              marginHorizontal: 20,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            Kitap Okuma zamanı geldi! 🎉
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              marginHorizontal: 23,
              marginTop: 20,
              lineHeight: 25,
            }}
          >
            Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 30,
          }}
        >
          <Image
            source={require("./image.png")}
            resizeMode={"contain"}
            style={{
              flex: 1,
              width: null,
              height: null,
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.85}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: -20,
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <View
              style={{
                backgroundColor: "#FEDB93",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 12,
              }}
            >
              <Text>İleri</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
