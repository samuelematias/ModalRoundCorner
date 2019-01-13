import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from '../../themes/';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	wrapper: {
		paddingTop: 5,
		backgroundColor: '#fff',
		height: '100%',
		flex: 1,
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6
	},
	line: {
		height: 2,
		width: '100%',
		backgroundColor: '#fafbfb'
	},
	containerLine: {
		marginTop: 10
	}
});
