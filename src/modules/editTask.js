const EditTask = (data, index, e) => {
  const parent = e.target.parentElement.previousSibling;
  const description = parent.lastChild;
  // eslint-disable-next-line no-alert
  const value = prompt('Edit selected task');
  if (value !== null && value !== '') {
    description.innerText = value;
    data[index].description = value;
  }
};

export default EditTask;