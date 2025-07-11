const api = "http://localhost:3000/api";
const form = document.getElementById("expenseForm");
const submitBtn = document.getElementById("submitBtn");

let currentEditId = null;

init();

function init() {
  displayList();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const price = e.target.price.value.trim();
  const productName = e.target.pname.value.trim();
  const category = e.target.category.value;

  if (!price || !pname || !category) {
    return alert("All fields are required");
  }

  const expense = { price, productName, category };

  try {
    if (currentEditId) {
      console.log("updating");
      
      await axios.put(`${api}/expense/${currentEditId}`, expense);
        displayList();
    } else {
      await axios.post(`${api}/expense`, expense);
        displayList();
    }
    
   console.log("updating");
    resetForm();
  } catch (err) {
    console.error(err);
  }
});

function displayList() {
  ["elecList", "foodList", "skinList"].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });

  axios.get(`${api}/expense`).then((res) => {
    res.data.forEach((expense) => addItemToList(expense));
  });
}

function addItemToList(expense) {
  const li = document.createElement("li");
  li.textContent = `${expense.productName} - ${expense.price} -  `;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.backgroundColor = "red";
  delBtn.onclick = () => deleteExpense(expense.id);
  li.appendChild(delBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.marginLeft = "8px";
  editBtn.onclick = () => startEdit(expense);
  li.appendChild(editBtn);

  if (expense.category === "electronics") {
    elecList.appendChild(li);
  } else if (expense.category === "food") {
    foodList.appendChild(li);
  } else if (expense.category === "skincare") {
    skinList.appendChild(li);
  }
}

function deleteExpense(id) {
  axios.delete(`${api}/expense/${id}`)
  console.log("hi");
  
  if (currentEditId === id) {
      resetForm();
    }
    displayList()
}

function startEdit(expense) {
  form.price.value = expense.price;
  form.pname.value = expense.productName;
  form.category.value = expense.category;

  currentEditId = expense.id;
  submitBtn.textContent = "Update";
}

function resetForm() {
  form.reset();
  currentEditId = null;
  submitBtn.textContent = "Submit";
}
