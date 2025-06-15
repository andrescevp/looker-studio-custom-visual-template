export const render = (rawData, processedData, options = {})  =>{
  console.log('Rendering Component with:', {
    rawData,
    processedData,
    options
  });
  const container = document.getElementById('container');
  const {style} = rawData;
  console.log('Style:', style);
  
  // Apply a clean modern style to the container
  container.style.fontFamily = "'Roboto', 'Segoe UI', Arial, sans-serif";
  container.style.backgroundColor = "transparent";
  container.style.overflow = "hidden";
  container.style.position = "relative";
  
  // Set dimensions with better responsiveness
  const margin = { top: 60, right: 40, bottom: 40, left: 40 };
  const width = Math.min(window.innerWidth - 40, 900) - margin.left - margin.right;
  const height = Math.min(window.innerHeight - 40, 650) - margin.top - margin.bottom;
  
  // Create wrapper div with gradient background
  const wrapper = document.createElement('div');
  wrapper.className = 'component-wrapper';
  wrapper.style.width = `${width + margin.left + margin.right}px`;
  wrapper.style.height = `${height + margin.top + margin.bottom}px`;
  // wrapper.style.background = 'linear-gradient(to bottom right, #fbf8f3, #f5f2ed)';
  wrapper.style.borderRadius = '8px';
  wrapper.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
  container.appendChild(wrapper);

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = width + margin.left + margin.right;
  canvas.height = height + margin.top + margin.bottom;
  canvas.style.display = 'block';
  wrapper.appendChild(canvas);
  
  // Get canvas context for drawing
  const ctx = canvas.getContext('2d');

  // @todo: Implement the actual drawing logic for the Component visualization    
}