import React from 'react';
import './button.css'

function HoverButton(props) {
  const { text } = props;

  return (
    <div class="container">
  <button class="btn1">{text}</button>
</div>
  );
}

export default HoverButton;
