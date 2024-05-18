import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
    endpoint : 'https://cloud.appwrite.io/v1',
    platform : 'com.jsm.holamarocco',
    projectId : '6640fec1002f4c0eef3a',
    databaseId : '6641041b00183db18370',
    userCollectionId : '66410487001aad3e623d',
    imagesCollectionId : '66410b4000107d23673c',
    storageId : '66410ff300255a4f1d14'
}   



// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client)

 export const createUser = async(email,password,username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;// if we dont get a neww acc it will show a new error 

        const avatarUrl=avatars.getInitials(username)

        await signIn(email,password);

        const newUser = await databases.createDocument(//to create a  new instance of the user in the databae
        config.databaseId,
        config.userCollectionId,
        ID.unique(),{
            accountId:newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )
    return newUser;
 
    }
     catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
}

export async function signIn(email,password){
    try {
        const session = await account.createEmailPasswordSession(email,password)//allow the user to log to their acc by providing a valid email
        return session
    } catch (error) {
        throw new Error(error)
        
    }
}

;