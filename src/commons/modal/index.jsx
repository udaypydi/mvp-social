import React from "react";
import PropTypes from 'prop-types';


function Modal({ showModal, title, modalBody, showActionButtons, onModalToggle }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => onModalToggle(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
           
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => onModalToggle(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  {modalBody}
                </div>
                {
                    showActionButtons && (
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={() => onModalToggle(false)}
                            >
                            Close
                            </button>
                            <button
                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={() => onModalToggle(false)}
                            >
                            Save Changes
                            </button>
                        </div>
                       
                    )
                }
                </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

Modal.propTypes = {
    showModal: PropTypes.bool,
    title: PropTypes.string,
    modalBody: PropTypes.node,
    showActionButtons: PropTypes.bool,
    onModalToggle: PropTypes.func,
};

Modal.defaultProps = {
    showModal: false,
    title: '',
    modalBody: null,
    showActionButtons: true,
    onModalToggle: () => null,
};

export default Modal;
