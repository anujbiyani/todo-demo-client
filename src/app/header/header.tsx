import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

export interface Props {
  text: string;
}

const Header = (props: Props) => {
  const { container, text } = styles;

  return (
    <View style={container}>
      <Text style={text}>
        {props.text}
      </Text>
    </View>
  );
};

const styles: any = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  } as TextStyle,

  container: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    zIndex: 2
  } as ViewStyle
});

export default Header;
