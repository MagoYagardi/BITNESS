import React from 'react';
import '../styles/WindowsWin.css'; // Asegúrate de que la ruta sea correcta

const WindowsWin = ({ title, children }) => {
  return (
    <div className="windows-win">
      <div className="windows-header">
        <div className="windows-controls">
          <span className="control minimize"></span>
          <span className="control maximize"></span>
          <span className="control close"></span>
        </div>
        <div className="windows-title">{title}</div>
      </div>
      <div className="windows-content">
        {children}
      </div>
    </div>
  );
};

export default WindowsWin;
