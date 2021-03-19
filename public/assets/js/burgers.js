// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
 
    // CREATE
    const createBurgerBtn = document.getElementById('create');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name
        const newBurger = {
          burger_name: document.getElementById('burger').value.trim(),
          
        };
  
        // Send POST request to create a new burger
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('burger').value = '';
  
          // Reload the page so the user can see the new burger
          console.log('Created a new Burger!');
          location.reload();
        });
      });
    }
      // UPDATE
      const changeDevouredBtns = document.querySelectorAll('.devoured');
  
      // Set up the event listener for the create button
      if (changeDevouredBtns) {
        changeDevouredBtns.forEach((button) => {
          button.addEventListener('click', (e) => {
            // Grabs the id of the element that goes by the name, "id"
            const id = e.target.getAttribute('data-id');
            const newDevoured = e.target.getAttribute('data-newdevoured');
    
            const newDevouredText = {
              devoured: newDevoured,
            };
    
            fetch(`/api/burgers/${id}`, {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
    
              // make sure to serialize the JSON body
              body: JSON.stringify(newDevouredText),
            }).then((response) => {
              // Check that the response is all good
              // Reload the page so the user can see the new burger
              if (response.ok) {
                console.log(`changed devoured to: ${newDevoured}`);
                location.reload('/');
              } else {
                alert('something went wrong!');
              }
            });
          });
        });
      }
  
});


  