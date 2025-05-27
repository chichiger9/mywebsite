document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(event) {
        // Get the target tab from data attribute
        const targetTab = event.currentTarget.getAttribute('data-tab');

        // Deactivate all buttons and hide all content
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Activate the clicked button
        event.currentTarget.classList.add('active');

        // Show the corresponding tab content
        const activeContent = document.getElementById(targetTab);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }

    // Add event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });

    // Optional: Ensure the first tab is active by default if not already set in HTML
    // This is already handled by adding 'active' class in the HTML for the first tab button and content.
    // However, if we wanted to strictly do it via JS:
    // if (tabButtons.length > 0) {
    //     tabButtons[0].classList.add('active');
    //     if (tabContents.length > 0) {
    //         const firstTabId = tabButtons[0].getAttribute('data-tab');
    //         const firstTabContent = document.getElementById(firstTabId);
    //         if (firstTabContent) {
    //             firstTabContent.classList.add('active');
    //         }
    //     }
    // }
});
