import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, useIonRouter } from "@ionic/react";
import React from 'react';
const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/app', 'forward', 'replace');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
                <IonButton expand="full" onClick={() => doLogin()}>Login</IonButton>
            </IonHeader>
            <IonContent fullscreen></IonContent>
            
        </IonPage>
    );
};

export default Login;