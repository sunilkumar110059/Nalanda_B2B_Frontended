import React from "react";
import PropTypes from "prop-types";

function AlertModal(props) {
  const { children, modalShowHideFn } = props;

  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      modalShowHideFn(false);
    }
  };

  return (
    <div className="modalwrap" onClick={(e) => closeHandler(e)}>
      <div className="modalcol">
        <div className="cover"> {children}</div>
        <div className="cover">
          <div className="row">
            <div className="col-auto">
              <div className="ovr btn btn-1 btn-size-1" onClick={(e) => closeHandler(e)}> Ok</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AlertModal.propTypes = {
  modalShowHideFn: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AlertModal;
