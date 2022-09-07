import React from 'react'
import Card from './Card'
function Model() {
  return (
    
<>
  <div>
      <div
        style={{ display: !isOpen ? "none" : "block" }}
        className="modal-container"
      >
        <div id="mymodal" className="Modal">
          <form
            onSubmit={(e) =>
              !isEdit ? addressSubmit(e) : editAddress(e, selectedAddressId)
            }
            className="modal--content"
          >
            <MdClose
             
            ></MdClose>

            <div className="modal-body">
              <p className="modal-title">Contact Info</p>
             
             
            </div>
          </form>
        </div>
      </div>
    </div>
</>

  )
}

export default Model