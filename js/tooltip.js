import {
    computePosition,
    flip,
    shift,
    offset,
    arrow,
  } from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.5.4/+esm';
   
  const button = document.querySelector('#button');
  const tooltip = document.querySelector('#tooltip');
  const arrowElement = document.querySelector('#arrow');
   
  computePosition(button, tooltip, {
    placement: 'top',
    middleware: [
      offset(6),
      flip(),
      shift({padding: 5}),
      arrow({element: arrowElement}),
    ],
  }).then(({x, y}) => {
    Object.assign(tooltip.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
  
  function update() {
    computePosition(button, tooltip, {
      // ... options ...
    }).then(({x, y, placement, middlewareData}) => {
      // ... positioning logic ...
    });
  }
   
  function showTooltip() {
    tooltip.style.display = 'block';
    update();
  }
   
  function hideTooltip() {
    tooltip.style.display = '';
  }
   
  [
    ['mouseenter', showTooltip],
    ['mouseleave', hideTooltip],
    ['focus', showTooltip],
    ['blur', hideTooltip],
  ].forEach(([event, listener]) => {
    button.addEventListener(event, listener);
  });