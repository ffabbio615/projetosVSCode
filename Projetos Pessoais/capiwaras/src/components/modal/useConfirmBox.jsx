import { useState } from "react";
import ConfirmBox from "./ConfirmBox";

export default function useConfirmBox () {
    
  const [isOpen, setIsOpen] = useState(false);
  const [callback, setCallback] = useState(null);
  const [message, setMessage] = useState("");

  const confirm = (msg, action) => {
    setMessage(msg);
    setIsOpen(true);
    setCallback(() => () => {
      action();
      setIsOpen(false);
    });
  };

  const cancel = () => setIsOpen(false);

  return {
    ConfirmBoxComponent: <ConfirmBox message={message} onConfirm={callback} onCancel={cancel} isOpen={isOpen} />,
    confirm,
  };
};