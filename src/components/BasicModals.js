import React from 'react'
import {
    Modal,
    Button,
} from 'react-bootstrap'
import BasicInputForm from './BasicInputForm'
import BasicRemoveForm from './BasicRemoveForm'
import BasicInputFormWithSelect from './BasicInputFormWithSelect'

const BasicModal = (Body) => ({ showModal, closeModal, bodyConfiguration, onSend, onEntered, validateInput, title, onSubmit }) => (
    <Modal show={ showModal } onEntered={() => onEntered() } onHide={ () => closeModal() }>
        <Modal.Header closeButton>
            <Modal.Title> { title } </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Body configuration={ bodyConfiguration } onSubmit={ onSubmit } />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={ (event) => onSend(event) } disabled={ !validateInput() }> Save </Button>
        </Modal.Footer>
    </Modal>
)

const InputModal = BasicModal(BasicInputForm)

const RemoveModal = BasicModal(BasicRemoveForm)

const InputModalWithSelect = BasicModal(BasicInputFormWithSelect)

export const BasicAddModal = (props) => (
    <InputModal onEntered={ () => {} } { ...props } />
)

export const BasicEditModal = InputModal

export const BasicRemoveModal = (props) => (
    <RemoveModal validateInput={ () => { return true }} { ...props } />
)

export const BasicAddModalWithSelect = (props) => (
    <InputModalWithSelect onEntered={ () => {} } { ...props } />
)

export const BasicEditModalWithSelect = InputModalWithSelect