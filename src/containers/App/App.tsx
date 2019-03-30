import React from 'react'
import { StyleSheet, View } from 'react-native'

import Hello from 'src/components/Hello'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
})

const App = () => (
	<View style={styles.container}>
		<Hello />
	</View>
)

export default App
