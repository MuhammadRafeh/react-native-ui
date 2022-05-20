// Defining Keys Here
export const ISGENDERSCREENSELECTED = 'ISGENDERSCREENSELECTED'; // true | false

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
};

export default storeData;
