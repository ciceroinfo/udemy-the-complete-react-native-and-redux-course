import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerContentStyle,
    headerContentTextStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <View style={headerContentTextStyle}>
            <Text>Title: </Text>
            <Text style={headerTextStyle}>{title}</Text>
          </View>
          <View style={headerContentTextStyle}>
            <Text>Artist: </Text>
            <Text>{artist}</Text>
          </View>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPressButton={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerContentTextStyle: {
    alignItems: 'baseline',
    flexDirection: 'row'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
