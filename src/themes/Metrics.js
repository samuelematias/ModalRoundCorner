import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
	marginVertical: 10,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	input: {
		borderRadius: 5,
		borderWidth: 1,
		padding: 5,
		height: 35
	},
	inputCustom: {
		padding: 5,
		height: 30
	},
	container: {
		padding: 15
	},
	button: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 5
	},
	icons: {
		tiny: 15,
		small: 20,
		medium: 30,
		large: 45,
		xl: 50
	},
	images: {
		small: 20,
		medium: 40,
		large: 60,
		logo: 200
	}
};

export default metrics;
