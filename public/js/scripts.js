window.onload = () => {
  const allItems = document.querySelectorAll(".grid-item");
  allItems.forEach((item) => {
    const rowHeight = 10; // Same as grid-auto-rows
    const rowGap = 16; // Match grid gap if any
    const contentHeight = item
      .querySelector("img")
      .getBoundingClientRect().height;
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${rowSpan}`;
  });
};
