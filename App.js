import React, {useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import YoutubePlayer from 'react-native-youtube-iframe'

export default function App() {
  const playerRef = useRef()
  return (
    <View style={styles.container}>
      <Text>Inserindo Iframe do Youtube no app React Native </Text>
      <YoutubePlayer 
        videoId={'RpDkRX0cDAY'}
        play={true}
        height={400} 
        width={400} 
        ref={playerRef}
        volume={50}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
