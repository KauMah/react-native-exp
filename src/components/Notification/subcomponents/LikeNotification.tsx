import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import { $darkerGray } from '../../../utils/colors';
import BaseNotification from './BaseNotification';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Kumbh Sans',
    fontWeight: 'bold',
    fontSize: 14,
    color: $darkerGray,
  },
});

interface Props {
  username: string;
  style?: ViewStyle;
  url: string;
}

const LikeNotification = ({ username, url, style }: Props) => {
  return (
    <BaseNotification url={url} style={style}>
      <Text style={styles.title}>{username} liked your photo.</Text>
    </BaseNotification>
  );
};

export default LikeNotification;
