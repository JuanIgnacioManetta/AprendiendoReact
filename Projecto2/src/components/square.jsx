export function Square({children, isSelected, updateBoard, index }) {
    const className = isSelected ? 'square square-selected' : 'square';
    
    const handleClick = () => {
      updateBoard(index);
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }