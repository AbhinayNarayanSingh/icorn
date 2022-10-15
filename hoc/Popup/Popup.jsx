import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DIALOG_CROSS_ICON, WHITE } from "../../utils/Environment";

// dialogs
import Alert from "./Alert/Alert";

const Popup = () => {
  const { open, type, key } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  // call this to Disable
  const disableScroll = () => {
    document.body.style.overflow = "hidden"
  }

  // call this to Enable
  const enableScroll = () => {
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    if(open){
      disableScroll()
    }
  }, [open])
  

  let dialogContent = null;
  switch (key) {
    case "CONFIRM_MSG_DIALOGE":
      dialogContent = <Alert />;
      break;

    default:
      break;
  }

  return (
    <>
      {open && (
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
                    dispatch({ type: "close_dialoge" })
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

export default Popup;
