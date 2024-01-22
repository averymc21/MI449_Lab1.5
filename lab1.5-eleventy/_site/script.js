function changePage(containerId) {
    // Assuming you have elements with class 'container'
    var containers = document.querySelectorAll('.container');
  
    // Remove 'active' class from all containers
    containers.forEach(function(container) {
      container.classList.remove('active');
    });
  
    // Show the container with the specified containerId
    var targetContainer = document.getElementById(containerId);
    if (targetContainer) {
      targetContainer.classList.add('active');
    }
  }