import { Modal } from "bootstrap/js/dist/modal.js";

const ModalPopPup = ({ target, children }) => {
  return (
    <>
      {/* Add Modal */}
      <div className="modal fade" id={target} aria-hidden="true" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ModalPopPup;
