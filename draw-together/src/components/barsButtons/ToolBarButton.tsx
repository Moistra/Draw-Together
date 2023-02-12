import React from 'react';
import style from "./ToolBarButton.module.scss";

interface IToolBarButton {
    type: 'brush' | 'circle' | 'eraser'
        | 'rect' | 'line'
        | 'redo' | 'undo' | 'save'
}


export const ToolBarButton = ({type}:IToolBarButton) => {
    return (
        <div>
            <button className={[style.toolbarBtn, style[type]].join(' ')}/>
        </div>
    );
};
