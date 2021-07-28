import React from 'react'
import MassageItem from './MassageItem/MassageItem'
import styles from './Massages.module.scss'
import { addMassage, setNewMassageText } from '../../../mystore/reducers/dialogsReducer'
import Massages from './Massages'

const MassagesContainer = ({ massages, newMassage, dispatch }) => {

	const textChange = (text) => {
		dispatch(setNewMassageText(text))
	}

	const postBtnClick = () => {
		dispatch(addMassage())
	}

	return <Massages textChange={textChange} postBtnClick={postBtnClick} massages={massages} newMassage={newMassage} />
}

export default MassagesContainer