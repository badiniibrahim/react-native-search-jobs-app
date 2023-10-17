import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hooks/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  const handleCardPres = (item: any) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular job</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wront</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPres={() => handleCardPres(item)}
              />
            )}
            keyExtractor={(item: any) => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
