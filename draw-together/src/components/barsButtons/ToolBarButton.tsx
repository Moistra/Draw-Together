import React from 'react';
import style from "./ToolBarButton.module.scss";

interface IToolBarButton {
    type: 'brush' | 'circle' |
        'eraser' | 'rect' |
        'line' | 'redo' |
        'undo' | 'save',
    handler?: () => void
}

export const ToolBarButton = ({type, handler}: IToolBarButton) => {
    return (
        <div>
            <button className={[style.toolbarBtn, style[type]].join(' ')} onClick={handler}/>
        </div>
    );
};
