import React from 'react';
import { StyleSheet, Text, View,ScrollView, ImageBackground,Image, Button } from 'react-native';
import { Link ,Redirect,router} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <ImageBackground source={require('./backgroud2.jpg')} style={styles.background}>

      <SafeAreaView style={styles.container }>
        <ScrollView contentContainerStyle={{ height: "100%"}}>
          <View className="w-full flex justify-center items-center min-h-[85vh] px-4">
            
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
           
            
            
            
            
            
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
              Unlock a world {"\n"}
              of convenience and comfort{"\n"}
              with our hassle-free rental solutions{" "}
                <Text className="text-secondary-200">Holamarocco</Text>
              </Text>

              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
              />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Holamarocco
          </Text>
          <CustomButton title ="Contnue with Email" 
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-full mt-7"
          />

          

          </View>

          
        
        </ScrollView>

      </SafeAreaView>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
  },
});
