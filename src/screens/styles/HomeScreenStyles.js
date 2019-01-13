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
	},
	containerItem: {
		margin: 10
	},
	wrapperItem: {
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	iconStyle: {
		width: 20,
		height: 20
	},
	buttonOpenModal: {
		width: 142,
		height: 42,
		borderRadius: 21,
		backgroundColor: '#6c40be',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.2,
		elevation: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	labelStyle: {
		fontSize: 12,
		fontWeight: '400',
		color: '#ffffff',
		alignSelf: 'center'
	}
});
