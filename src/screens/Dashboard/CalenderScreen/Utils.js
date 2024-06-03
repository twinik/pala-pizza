import { PermissionsAndroid, Platform, Alert } from 'react-native';

export const requestGalleryPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Gallery Permission',
                    message: 'App needs access to your gallery to select images.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Gallery permission granted');
                return true;
            } else {
                console.log('Gallery permission denied');
                Alert.alert('Permission Denied', 'You need to give gallery permission to select images.');
            }
        } catch (err) {
            console.warn(err);
        }
    } else {
        return true;
    }
};