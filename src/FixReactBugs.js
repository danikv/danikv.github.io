import { Modal } from 'react-overlays';

Modal.prototype.componentWillMount = function () {
    this.focus = () => {};
};