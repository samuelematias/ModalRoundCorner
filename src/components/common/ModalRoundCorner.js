import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, Modal, Text } from 'react-native';
import PropTypes from 'prop-types';

//styles
import styles from './styles/ModalRoundCornerStyles';

class ModalRoundCorner extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	_renderModal = () => {
		const { open, onPressOutside, modalContent, overlayStyle } = this.props;
		const {} = this.state;

		return (
			<Modal animationType="slide" transparent={true} visible={open}>
				<View style={styles.containerBottomModal}>
					<TouchableOpacity
						style={[styles.bottomOverlay, overlayStyle]}
						onPress={() => onPressOutside()}
					>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'flex-end',
								flex: 1,
								marginBottom: 5
							}}
						>
							<View
								style={{
									width: 40,
									height: 6,
									backgroundColor: '#fafbfb',
									borderRadius: 5
								}}
							/>
						</View>
					</TouchableOpacity>
					<View
						style={{
							flex: 1,
							backgroundColor: '#ffffff',
							borderTopLeftRadius: 6,
							borderTopRightRadius: 6
						}}
					>
						{modalContent()}
					</View>
				</View>
			</Modal>
		);
	};

	render() {
		return this._renderModal();
	}
}

ModalRoundCorner.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	open: false,
	onPressOutside: () => {},
	onValidSubmit: () => {},
	onPressCancel: () => {},
	modalContent: () => {},
	overlayStyle: styles.bottomOverlay
};

ModalRoundCorner.propTypes = {
	/**
   *(used for some props with any type)
   *  anyType: PropTypes.any
   *(used to boolean props)
   *  boolType: PropTypes.bool
   *(used to stirng props)
   *  stringType: PropTypes.string
   *(user to number props)
   *  numberProps: PropTypes.number
   *(used to func props (onPress, overlay, etc.))
   *  funcType: PropTypes.func
   *(used to styles props)
   *  objectType: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ])
   *(used to images(url/images on project))
   *  imageType: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
   */
	open: PropTypes.bool,
	onPressOutside: PropTypes.func,
	onValidSubmit: PropTypes.func,
	onPressCancel: PropTypes.func,
	overlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	])
};

export default ModalRoundCorner;
