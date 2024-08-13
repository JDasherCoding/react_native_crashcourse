import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
	const { loading, isLogged } = useGlobalContext();

	// TODO: Bug isLogged only initialized after sign-in or sign-up attempt
	if (!loading && isLogged) return <Redirect href="/home" />;

	return (
		// Ensures content is not obstructed by statusbar, etc on different devices
		<SafeAreaView className="bg-primary h-full">
			{/* Scrollview to allow scrolling in case of smaller devices */}
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full justify-center items-center min-h-[85vh] px-4">
					<Image
						source={images.logo}
						className="w-[130px] h-[84px]"
						resizeMode="contain" // Contains image within width and height
					/>

					<Image
						source={images.cards}
						className="max-w-[380px] w-full h-[300px]"
						resizeMode="contain" // Contains image within width and height
					/>

					<View className="relative mt-5">
						<Text className="text-3xl text-white font-bold text-center">
							Discover Endless Possibilities within{" "}
							<Text className="text-secondary-200">Aora</Text>
						</Text>

						{/* Underline of Aora  */}
						<Image
							source={images.path}
							className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
							resizeMode="contain"
						/>
					</View>

					<Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
						Where creativity meets innovation: embark on a journey of limitless
						exploration with Aora.
					</Text>

					<CustomButton
						title="Continue with Email"
						handlePress={() => router.push("/sign-in")}
						containerStyles="w-full mt-7"
					></CustomButton>
				</View>
			</ScrollView>

			{/* Manages statusbar  */}
			<StatusBar backgroundColor="#161622" style="light" />
		</SafeAreaView>
	);
}
