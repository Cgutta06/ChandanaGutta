import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BuildingModel = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Using a simplified 3D rendering approach with HTML and CSS
    // For actual 3D modeling, libraries like Three.js would be used
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let frameId;
    let rotation = 0;
    
    const building = {
      width: 100,
      height: 200,
      depth: 60,
      color: '#3b82f6',
      strokeColor: '#1e40af',
      windowColor: '#dbeafe',
    };
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Center point
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Calculate rotated coordinates
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      
      // Draw building
      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Front face
      ctx.beginPath();
      ctx.fillStyle = building.color;
      ctx.moveTo(-building.width/2 * cos, -building.height/2);
      ctx.lineTo(building.width/2 * cos, -building.height/2);
      ctx.lineTo(building.width/2 * cos, building.height/2);
      ctx.lineTo(-building.width/2 * cos, building.height/2);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = building.strokeColor;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Side face (if visible)
      if (sin > 0) {
        ctx.beginPath();
        ctx.fillStyle = darkenColor(building.color, 20);
        ctx.moveTo(building.width/2 * cos, -building.height/2);
        ctx.lineTo(building.width/2 * cos + building.depth * sin, -building.height/2);
        ctx.lineTo(building.width/2 * cos + building.depth * sin, building.height/2);
        ctx.lineTo(building.width/2 * cos, building.height/2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.fillStyle = darkenColor(building.color, 20);
        ctx.moveTo(-building.width/2 * cos, -building.height/2);
        ctx.lineTo(-building.width/2 * cos + building.depth * sin, -building.height/2);
        ctx.lineTo(-building.width/2 * cos + building.depth * sin, building.height/2);
        ctx.lineTo(-building.width/2 * cos, building.height/2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      
      // Top face
      ctx.beginPath();
      ctx.fillStyle = lightenColor(building.color, 20);
      ctx.moveTo(-building.width/2 * cos, -building.height/2);
      ctx.lineTo(building.width/2 * cos, -building.height/2);
      ctx.lineTo(building.width/2 * cos + building.depth * sin, -building.height/2);
      ctx.lineTo(-building.width/2 * cos + building.depth * sin, -building.height/2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Draw windows on front face
      ctx.fillStyle = building.windowColor;
      const windowWidth = 15;
      const windowHeight = 20;
      const rows = 5;
      const cols = 3;
      const windowSpacingX = (building.width - cols * windowWidth) / (cols + 1);
      const windowSpacingY = (building.height - rows * windowHeight) / (rows + 1);
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const windowX = -building.width/2 * cos + (col + 1) * windowSpacingX + col * windowWidth;
          const windowY = -building.height/2 + (row + 1) * windowSpacingY + row * windowHeight;
          
          ctx.fillRect(
            windowX,
            windowY,
            windowWidth * cos,
            windowHeight
          );
        }
      }
      
      // Draw windows on side face if visible
      if (sin > 0) {
        ctx.fillStyle = darkenColor(building.windowColor, 10);
        for (let row = 0; row < rows; row++) {
          const windowX = building.width/2 * cos + 10 * sin;
          const windowY = -building.height/2 + (row + 1) * windowSpacingY + row * windowHeight;
          
          ctx.fillRect(
            windowX,
            windowY,
            windowWidth * sin,
            windowHeight
          );
        }
      } else {
        ctx.fillStyle = darkenColor(building.windowColor, 10);
        for (let row = 0; row < rows; row++) {
          const windowX = -building.width/2 * cos + building.depth * sin + 10 * sin;
          const windowY = -building.height/2 + (row + 1) * windowSpacingY + row * windowHeight;
          
          ctx.fillRect(
            windowX,
            windowY,
            -windowWidth * sin,
            windowHeight
          );
        }
      }
      
      ctx.restore();
      
      // Animate rotation
      rotation += 0.01;
      
      frameId = requestAnimationFrame(draw);
    };
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);
  
  // Helper functions to lighten/darken colors
  function lightenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (
      0x1000000 + 
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + 
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + 
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
  }
  
  function darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return '#' + (
      0x1000000 + 
      (R > 0 ? R : 0) * 0x10000 + 
      (G > 0 ? G : 0) * 0x100 + 
      (B > 0 ? B : 0)
    ).toString(16).slice(1);
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default BuildingModel;