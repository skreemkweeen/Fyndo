import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import { z } from "zod";
import { bidSchema } from "@fyndo/types";

// Example of @fyndo/types consumption
type BidPayload = z.infer<typeof bidSchema>;

export default function App() {
  const [session, setSession] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    SecureStore.getItemAsync("fyndo_session").then((token) => {
      if (token) setSession(token);
    });
  }, []);

  const handleLogin = async () => {
    try {
      // In a real app, this hits /api/v1/auth
      const res = await fetch("http://localhost:3000/api/v1/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        await SecureStore.setItemAsync(
          "fyndo_session",
          data.token || "mock_token",
        );
        setSession(data.token || "mock_token");
      } else {
        Alert.alert("Login failed");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Network error");
    }
  };

  const placeMockBid = () => {
    const payload: BidPayload = {
      auctionId: "auc_123",
      amount: 100,
      bidderId: "usr_123",
    };
    Alert.alert("Bid placed locally", JSON.stringify(payload));
  };

  if (session) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Fyndo Mobile!</Text>
        <Button title="Place Mock Bid" onPress={placeMockBid} />
        <Button
          title="Logout"
          onPress={() => {
            SecureStore.deleteItemAsync("fyndo_session");
            setSession(null);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Fyndo</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
