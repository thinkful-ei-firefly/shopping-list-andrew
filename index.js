'use strict';

const STORE = [
  {id: cuid(), name: "apples", checked: false},
  {id: cuid(), name: "oranges", checked: false},
  {id: cuid(), name: "milk", checked: true},
  {id: cuid(), name: "bread", checked: false}
];


function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}


function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  const items = shoppingList.map((item) => generateItemElement(item));
  
  return items.join("");
}


function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}


function handleNewItemSubmit() {
  //when Add item button is pushed
    //preventDefault
    //collect input
    //input field should be pushed into STORE as an object with
        //{id: cuid(), name: ${input}, checked: false}
    //Call renderShoppingList again to re-render list
  console.log('`handleNewItemSubmit` ran');
}
  }
  
  
  function handleItemCheckClicked() {
    //when a checkbox is selected, and if item wasn't checked before but is now
        //Target item associated with the checkbox collected
            //change STORE index of that item's object to
            //.checked: true;
    console.log('`handleItemCheckClicked` ran');
  }
  
  
  function handleDeleteItemClicked() {
        //when a checkbox is selected, and if item was checked before but isn't now
        //Target item associated with the checkbox collected
            //change STORE index of that item's object to
            //.checked: false;
    console.log('`handleDeleteItemClicked` ran')
  }
  
  // this function will be our callback when the page loads. it's responsible for
  // initially rendering the shopping list, and activating our individual functions
  // that handle new item submission and user clicks on the "check" and "delete" buttons
  // for individual shopping list items.
  function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
  
  }
  
  // when the page loads, call `handleShoppingList`
  $(handleShoppingList);