document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".carousel-section");
    const prevBtn = document.getElementById("prev-section");
    const nextBtn = document.getElementById("next-section");
    let currentSectionIndex = 0;
  
    // Show the initial section
    sections[currentSectionIndex].style.display = "block";
    
    // Function to display the current section and update button visibility
    function showCurrentSection() {
      sections.forEach((section, index) => {
        if (index === currentSectionIndex) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
  
      // Update button visibility based on the current section index
      if (currentSectionIndex === 0) {
        prevBtn.style.display = "none";
      } else {
        prevBtn.style.display = "block";
      }
  
      if (currentSectionIndex === sections.length - 1) {
        nextBtn.style.display = "none";
      } else {
        nextBtn.style.display = "block";
      }
    }
  
    // Event listener for the "Next" button
    nextBtn.addEventListener("click", function () {
      currentSectionIndex++;
      if (currentSectionIndex >= sections.length) {
        currentSectionIndex = sections.length - 1;
      }
      showCurrentSection();
    });
  
    // Event listener for the "Previous" button
    prevBtn.addEventListener("click", function () {
      currentSectionIndex--;
      if (currentSectionIndex < 0) {
        currentSectionIndex = 0;
      }
      showCurrentSection();
    });
  
    // Initialize button visibility
    showCurrentSection();
  });