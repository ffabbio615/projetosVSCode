import { useState } from "react";
import AlertBox from "./AlertBox";

export default function useConfirmBox () {
    
  const [isOpen, setIsOpen] = useState(false);
  const [callback, setCallback] = useState(null);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const alertAttention = (msg) => {
    setTitle("Atenção!");
    setMessage(msg);
    setIsOpen(true);
    setCallback(() => () => {
      setIsOpen(false);
    });
  };

  const alertConfirmation = (msg, action) => {
    setTitle("Confirmação:");
    setMessage(msg);
    setIsOpen(true);
    setCallback(() => () => {
      action();
      setIsOpen(false);
    });
  };

  return {
    AlertBoxComponent: <AlertBox title={title} message={message} onConfirm={callback} isOpen={isOpen} />,
    alertAttention, alertConfirmation,
  };
};