import React from 'react'
import {
    Modal,
    Button,
} from 'react-bootstrap'
import BasicInputForm from './BasicInputForm'
import BasicLabelForm from './BasicLabelForm'
import BasicInputFormWithSelect from './BasicInputFormWithSelect'

const BasicModal = (Body,Footer) => ({ showModal, closeModal, bodyConfiguration, footerConfiguration, onEntered, title }) => (
    <Modal show={ showModal } onEntered={() => onEntered() } onHide={ () => closeModal() }>
        <Modal.Header closeButton>
            <Modal.Title> { title } </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Body { ...bodyConfiguration } />
        </Modal.Body>
        <Modal.Footer>
            <Footer { ...footerConfiguration } />
        </Modal.Footer>
    </Modal>
)

const SaveButton = (props) => (
    <Button { ...props } > Save </Button>
)

const InputModal = BasicModal(BasicInputForm, SaveButton)

const LabelModal = BasicModal(BasicLabelForm, SaveButton)

const InputModalWithSelect = BasicModal(BasicInputFormWithSelect, SaveButton)

export const BasicAddModal = (props) => (
    <InputModal onEntered={ () => {} } { ...props } />
)

export const BasicEditModal = InputModal

export const BasicRemoveModal = (props) => (
    <LabelModal footerConfiguration={{...props.footerConfiguration, disabled: false }} { ...props } />
)

export const LabeledModalWithoutButtons = BasicModal(BasicLabelForm, ((props) => <div/>))

const MultipleButtons = (props) => (
    props.items.map(item => (
        <Button key={ item.name } { ...item.configuration }> { item.name } </Button>
    ))
)

export const LabeledModalWithMultipleButtons = BasicModal(BasicLabelForm,MultipleButtons)

export const BasicAddModalWithSelect = InputModalWithSelect

export const BasicEditModalWithSelect = InputModalWithSelect