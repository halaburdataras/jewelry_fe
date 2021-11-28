import React from "react";

import s from "./style.module.css";

const FollowUs = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={`${s.modal} ${open && s.active}`} onClick={handleClose}>
      <div
        className={`${s.modalContent} ${open && s.active}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.header}>
          <p>Follow us</p>
          <div className={s.exit} onClick={handleClose} />
        </div>
        <div className={s.linksContainer}>
          <div className={`${s.link}`}>
            <div className={s.instagram} />
            <p>Instagram</p>
          </div>
          <div className={`${s.link}`}>
            <div className={s.facebook} />
            <p>Facebook</p>
          </div>
          <div className={`${s.link}`}>
            <div className={s.telegram} />
            <p>Telegram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
