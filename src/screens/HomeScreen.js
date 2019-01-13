import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	View,
	ImageBackground,
	FlatList,
	Image
} from 'react-native';

import ModalRoundCorner from '../components/common/ModalRoundCorner';
import { Images } from '../themes/';

//styles
import styles from './styles/HomeScreenStyles';

class HomeScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openModal: false,
			dataModal: [
				{
					id: '1',
					name: 'Save link',
					icon: Images.iconFb1,
					about: 'Add this to your saved links'
				},
				{
					id: '2',
					name: 'Hide post',
					icon: Images.iconFb2,
					about: 'See fewer posts like this'
				},
				{
					id: '3',
					name: 'Snooze Samuel for 30 days',
					icon: Images.iconFb3,
					about: 'Temporarily stop seeing posts'
				},
				{
					id: '4',
					name: 'Unfollow Samuel',
					icon: Images.iconFb4,
					about: 'Stop seeing posts but stay friend'
				},
				{
					id: '5',
					name: 'Give feedback on this post',
					icon: Images.iconFb5,
					about: 'You can also report the post after givin feedback'
				}
			]
		};
	}

	/**
	 * Handle to setState on openModal state (to open the modal).
	 * @author samuelmataraso
	 * @method _handleOpenModal
	 * @param none
	 * @return state
	 */
	_handleOpenModal = () => {
		this.setState({ openModal: true });
	};

	/**
	 * Handle to setState on openModal state (to close the modal).
	 * @author samuelmataraso
	 * @method _handleCloseModal
	 * @param none
	 * @return {state} state
	 */
	_handleCloseModal = () => {
		this.setState({ openModal: false });
	};

	/**
	 * render separator between Items
	 * @author samuelmataraso
	 * @method renderSeparator
	 * @param none
	 * @return {func} render
	 */
	_renderSeparator = () => {
		return (
			<View style={styles.containerLine}>
				<View style={styles.line} />
			</View>
		);
	};

	/**
	 * render the flatlist item
	 * @author samuelmataraso
	 * @method renderSeparator
	 * @param object item
	 * @return {func} render
	 */
	_renderItem = item => {
		return (
			<View style={styles.containerItem}>
				<View style={styles.wrapperItem}>
					<View style={{ paddingRight: 10 }}>
						<Image source={item.icon} style={styles.iconStyle} />
					</View>
					<View
						style={{
							flexDirection: 'column'
						}}
					>
						<Text style={{ color: '#44464a' }}>{item.name}</Text>
						<Text style={{ color: '#909398' }}>{item.about}</Text>
					</View>
				</View>
			</View>
		);
	};

	/**
	 * render the flatlist
	 * @author samuelmataraso
	 * @method renderSeparator
	 * @param none
	 * @return {func} render
	 */
	_renderModalContent = () => {
		const { dataModal } = this.state;
		return (
			<FlatList
				data={dataModal}
				renderItem={({ item }) => this._renderItem(item)}
				keyExtractor={item => item.id.toString()}
				ItemSeparatorComponent={() => this._renderSeparator()}
			/>
		);
	};

	render() {
		const { openModal } = this.state;
		return (
			<ImageBackground source={Images.screenFb} style={styles.container}>
				<TouchableOpacity
					style={styles.buttonOpenModal}
					onPress={() => this._handleOpenModal()}
				>
					<Text style={styles.labelStyle}>{'Open Modal'}</Text>
				</TouchableOpacity>
				{
					<ModalRoundCorner
						open={openModal}
						onPressOutside={() => this._handleCloseModal()}
						modalContent={() => this._renderModalContent()}
						showButtonOnOverlay //Facebook Modal Style
						// showButtonOnModal //LinkedIn Modal style
						// roundCorner={10} //LinkedIn Modal style
					/>
				}
			</ImageBackground>
		);
	}
}

export default HomeScreen;
