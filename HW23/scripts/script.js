function createList(data) {
  const list = document.createElement("ul");
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  });
  return list;
}
console.log(list);

const data = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4", "Элемент 5"];
const list = createList(data);
document.body.appendChild(list);
