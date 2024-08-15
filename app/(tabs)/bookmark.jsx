import React, { useEffect } from "react";

import { View, Text, FlatList } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { searchPosts } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppwrite";

// Components
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import VideoCard from "../../components/VideoCard";

const Bookmark = () => {
	// const { query } = useLocalSearchParams();
	// const { data: posts, refretch } = useAppWrite(() => searchPosts(query));

	// Refresh when query changes
	// useEffect(() => {
	// 	refretch();
	// }, [query]);

	return (
		<SafeAreaView className="bg-primary  h-full">
			<FlatList
				data={[]}
				keyExtractor={(item) => item.$id}
				renderItem={({ item }) => <VideoCard video={item} />}
				ListHeaderComponent={() => (
					<View className="my-6 px-4 ">
						<Text className="text-2xl font-psemibold text-white">
							Saved Videos
						</Text>
						<View className="mt-6 mb-8">
							<SearchInput placeholder="Search your saved videos" />
						</View>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title="No Videos Found"
						subtitle="No videos found for this search query"
					/>
				)}
			/>
		</SafeAreaView>
	);
};

export default Bookmark;
