import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import styles from "./styles";

const carItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.mainTitle}>Model S</Text>
          <Text style={styles.subTitle}>Starting at "Mura lang bilhin mo na"</Text>
        </View>
      </View>
    );
};

export default carItem;