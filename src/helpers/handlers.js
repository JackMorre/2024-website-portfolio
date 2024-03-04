export const handleOpenTab = (event, url) => {
  if (event) event.preventDefault();
  window.open(url, "_blank");
};
