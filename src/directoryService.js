import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite'
import { FirebaseFirestore } from './Utils/firebase'

const createRestaurant = async (restaurant) => {
    const newDoc = doc(collection(FirebaseFirestore, '/restaurants'));
    await setDoc(newDoc, restaurant);
    alert('restaurant created')
    console.log('restaurant created');
}

const listRestaurants = async () => {
    const restaurantRef = collection(FirebaseFirestore, '/restaurants');

    const docs = await getDocs(restaurantRef);
    const restaurants = [];

    docs.forEach(document => {
        restaurants.push({id: document.id, 
            name: document.data().name,
            description: document.data().description,
            address: document.data().address,
            url: document.data().url
        });
    });

    return restaurants;
}

export {
    createRestaurant,
    listRestaurants
}