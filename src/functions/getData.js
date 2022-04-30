const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) return value;
    } catch (e) {
        return false;
    }
};
