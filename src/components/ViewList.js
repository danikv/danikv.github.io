import React from 'react'
import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap'

const ViewList = ({items, onClick, getKey, displayFunction}) => (
    <ListGroup>
        { items.map(item => (
            <ListGroupItem key={ getKey(item) } onClick={ () => onClick(item) }>
                { displayFunction(item) }
            </ListGroupItem>
        ))}
    </ListGroup>
)

export default ViewList