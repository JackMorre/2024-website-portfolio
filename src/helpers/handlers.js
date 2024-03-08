export const handleOpenTab = (e, url) => {
  if (e) e.preventDefault();
  window.open(url, "_blank");
};
