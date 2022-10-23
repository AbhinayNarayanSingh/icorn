import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DIALOG_CROSS_ICON, WHITE } from "../../utils/Environment";
import Alert from "./Alert/Alert";
import Address from "./Address/Address";
import { close_dialog } from "../../store/saga/Dialog";

const Dialog = () => {
  const { open, props } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  const disableScroll = () => document.body.style.overflow = "hidden"
  const enableScroll = () => document.body.style.overflow = "auto"

  useEffect(() => {
    if(open && props?.key){
      disableScroll()
    }
  }, [open])
  

  let dialogContent = null;
  switch (props?.key) {
    case "CONFIRM_MSG_DIALOGE":
      dialogContent = <Alert/>;
      break;
    case "ADDRESS_FORM":
      dialogContent = <Address/>;
      break;

  }

  return (
    <>
      {open && props?.key && (
        <div>
          <div className="dialog-container">
            <div className="dialog-content-container">
              <div className="dialog-content">
                <img
                  src={DIALOG_CROSS_ICON[0]}
                  alt={DIALOG_CROSS_ICON[1]}
                  className="close-dialoge"
                  onClick={() => {
                    enableScroll();
                    dispatch(close_dialog())
                  }}
                />
                {dialogContent}
              </div>
            </div>
          </div>
          <style jsx>{`
            .dialog-container {
              width: 100vw;
              height: 100vh;
              background: #0000004d;
              position: fixed;
              top: 0;
              bottom: 0;
              right: 0;
              z-index: 9999;
            }
            .dialog-content-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            }
            .dialog-content {
              position: relative;
              background: ${WHITE};
              border-radius: 20px;
              padding: 1rem;
              min-width: 500px;
              min-height: 250px;
            }
            .close-dialoge {
              position: absolute;
              right: 1rem;
              top: 1rem;
              z-index: 99;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Dialog;
