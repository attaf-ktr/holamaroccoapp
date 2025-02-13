import { View, Text, ScrollView,Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createURL } from 'expo-linking';
import { createUser } from '../../lib/appwrite';


const SignUp= () => {
  const [form, setForm] = useState
  ({
    username:"",
    email: "",
    password: "",

  })
const [isSubmitting, setisSubmitting] = useState(false)

const submit = async() =>{
  if (!form.username || !form.email || !form.password){//if its not exist in thedatabase 
    Alert.alert('Error','please fill in  all the fields')

  } 
  createUser();
  setisSubmitting(true);
  try {
    const result = await createUser(form.email, form.password, form.username)
    router.replace('/home')
  } catch (error) {
    Alert.alert('Error', error.message)
  }finally{
    setisSubmitting(false)
  }
    
  }



  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
      <View className="w-full flex justify-center h-full px-4 my-6"
          >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign-up to Holamarocco
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })} //e is the event  after recieving the e it will set it  to the email same as for the pwd;
            otherStyles="mt-10"
          />
          
          
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })} //e is the event  after recieving the e it will set it  to the email same as for the pwd;
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton 
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className='text-lg text-gray-100 font-popular'>
              Have an account already ?
              <Link href="/home" className='text-lg font-psemibold text-secondary'> Go to Home ..</Link>{"\n"}

              <Link href="/sign-in" className='text-lg font-psemibold text-secondary'> Sign in Now </Link>
            </Text>
            
          </View>
          

      </View>

      </ScrollView>
      
    </SafeAreaView>
  )

}
export default SignUp