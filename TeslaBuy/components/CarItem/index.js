import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {

  const {name, tagLine, taglineCTA, image} = props.car;
  
    return (
      <View style={styles.carContainer}>
        <ImageBackground
        source={image}
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.mainTitle}>{name}</Text>
          <Text style={styles.subTitle}>
            {tagLine}
            {' '}
              <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <StyledButton 
            type="primary" 
            content={"Custom Order"} 
            onPress={() => {
            //console.warn("Custom order was pressed");
          }}
          />

          <StyledButton 
            type="secondary" 
            content={"Existing Inventory"} 
            onPress={() => {
            //console.warn("Existing inventory was pressed");
          }}
          />
        </View>

      </View>
    );
};

export default CarItem;