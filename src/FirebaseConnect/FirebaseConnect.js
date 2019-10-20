import * as firebase from "firebase";


export const connectFirebase = () => {
	// This const is firebase config. If you want change it.
	const firebaseConfig = {
		apiKey: "AIzaSyCESSkTmp4lcauyiC7UG8DdA89gulO3gK8",
		authDomain: "relations-20efb.firebaseapp.com",
		databaseURL: "https://relations-20efb.firebaseio.com",
		projectId: "relations-20efb",
		storageBucket: "relations-20efb.appspot.com",
		messagingSenderId: "622631998349",
		appId: "1:622631998349:web:134c7f2ef7e1766fcf23c4",
		measurementId: "G-58EM5RQ8SQ"
	};
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
}