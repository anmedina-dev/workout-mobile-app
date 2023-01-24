import { StyleSheet, Text, View } from "react-native";
import Nav from "./pages/Nav";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
        setIsAuthenticated(true);
      } else if (!isAuthenticated) {
        // User is signed out
        // ...
        setIsAuthenticated(false);
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {isAuthenticated ? <Nav /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
