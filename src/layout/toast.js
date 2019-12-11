import { Toast } from 'native-base';


export function showToast(message, buttonText, duration, type) {
    Toast.show({
        text: message,
        buttonText: buttonText,
        duration: duration,
        type: type
    });
}