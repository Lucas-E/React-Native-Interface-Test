import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	Pressable,
	Image,
} from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Image source={require("./assets/illust1.png")} />
			<View
				style={{
					flexDirection: "column",
					width: "100%",
					alignItems: "center",
				}}
			>
				<Text
					style={{
						color: "white",
						fontWeight: "bold",
						fontSize: 20,
						marginBottom: 40,
					}}
				>
					Welcome Back!
				</Text>
				<Text
					style={{
						color: "white",
						fontSize: 16,
						marginBottom: 20,
					}}
				>
					Please Log into your existing account
				</Text>
				<TextInput
					style={{
						padding: 10,
						borderWidth: 1,
						borderColor: "white",
						borderRadius: 15,
						width: "100%",
						color: "white",
						height: 58,
					}}
					placeholder="Your Email"
					placeholderTextColor={"white"}
				/>
				<TextInput
					style={{
						padding: 10,
						borderWidth: 1,
						borderColor: "white",
						borderRadius: 15,
						width: "100%",
						color: "white",
						height: 58,
						marginVertical: 20,
					}}
					placeholder="Your Password"
					placeholderTextColor={"white"}
					secureTextEntry={true}
				/>
				<Pressable
					style={({pressed}) => ({
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-around",
						backgroundColor: pressed ? "#2BC99090" : "#2BC990",
						borderRadius: 20,
						height: 58,
						color: "white",
						width: "100%",
						shadowColor: "black",
						shadowRadius: 10,
						shadowOffset: 10,
					})}
				>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: 20,
						}}
					>
						Log In
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0A0171",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		height: "100%",
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
});
